

jQuery( document ).ready(function($) {

    setTimeout(function () {
        $('.tng_banner_slider_wrap.owl-carousel').owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4500,
            loop: true
        });
    }, 2000);

    /*** Scroll Top --> */

    $('body').append('<div id="scrollTop"><i class="fas fa-angle-up"></i></div>');

    $('#scrollTop').on('click',function(e){
        e.preventDefault();
        $("window,html,body").animate({ scrollTop: 0 }, 'slow');
    });

    var global_scroll = 0;
    var last_scroll = 0;

    $(window).scroll(function (event) {
        last_scroll = global_scroll;
        global_scroll = $(window).scrollTop();

        if (global_scroll > 200 && global_scroll < last_scroll){
            $('#scrollTop').addClass('visible');
        }else {
            $('#scrollTop').removeClass('visible');
        }

        if ($(window).scrollTop() > 200) {
            $('#scrollTop').addClass('visible');
        }

    });

    /*** <-- Scroll Top */



    /*** Scroll to Anker --> */


    /* seitenübergreifende navigation mittels anchor IDs*/
    $("body:not(.woocommerce):not(.archive) #content a:not(.blank)").on('click', function(event) {
        this.blur();
        
        var speed = 800;
        if ($(window).width() <= 992) {  
            speed = 300;
        }

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
            //wenn auf home dann smooth scroll
            if(hash && $('body').hasClass('home')) {

                $('window,html, body').animate({
                    scrollTop: $(hash).offset().top
                }, "slow","swing", function(){
                    window.location.hash = hash;
                });
            }else {
            //wenn auf anderere Seite
                window.location.href = location.origin + hash; 
            }
        }
    });


    /*** <-- Scroll to Anker */



    /*** Navigation Primärlink klickbar / plus klickbar --> */
    var navElementDropdown = '.menu-item.dropdown .plus';


    $(navElementDropdown).on('click',function(e){
        if($(window).width() <= 1199) {
        e.preventDefault();
        var dropdown = $(this).next('.dropdown-menu');
        if(dropdown.hasClass('show')) {
            dropdown.hide().removeClass('show');
            dropdown.prev('.plus').removeClass('minus');
        } else {
            dropdown.show().addClass('show');
            dropdown.prev('.plus').addClass('minus');
        }

        }
    });

  /*** <-- Navigation Primärlink klickbar / plus klickbar  */


    /*** Add span to h1, h2 - because of the two lines besides the heading--> */
        $.each($('h1, h2'), function( index, value ) {
            if($(this).find('span').length === 0) {
                $(value).contents().wrap('<span />')
            }
           
        });

    /*** <-- Add span to h1, h2  */

});
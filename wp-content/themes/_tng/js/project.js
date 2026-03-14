jQuery(document).ready(function ($) {

  if ($('#gform_wrapper_3 .validation_error').length > 0) {
    if ($('#gform_wrapper_3 .validation_error').html() != '') {
      $('#tng_steinanfrage').addClass('active');
    }
  }

  /** PRODUKT GALLERIE */
  /*$('#wooswipe .thumbnails .slick-track').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
*/


  $(document).on('click', '.gform_confirmation_wrapper-closer', function () {
    $('#tng_steinanfrage').removeClass('active');
  });
  $(window).on('load', function () {
    if (typeof tng_steinanfrage_confirmation !== 'undefined' && tng_steinanfrage_confirmation) {
      $('#tng_steinanfrage').addClass('active');
    }
  });

  $('body').on('click', '.tng_steinanfrage_close', function () {
    $('#tng_steinanfrage').removeClass('active');
    $('#tng_steinanfrage').css('visibility', 'hidden');
  });
  $('body').on('click', '.tng_steinanfrage_btn', function () {
    $('#tng_steinanfrage').addClass('active');
  });

  function bug_toggleClass(el, _class) {
    if (el.hasClass(_class)) {
      el.removeClass(_class);
    } else {
      $(el).addClass(_class);
    }
    console.log('hier');
  }

  $('button.navbar-toggler').unbind("click");
  $('button.navbar-toggler').on('click', function () {
    bug_toggleClass($('#nav-mobile-wrapper'), 'show');
  });

  $('.close-menu').on('click', function () {
    $('#nav-mobile-wrapper').removeClass('show');
  });

  $('.nav-mobile li.menu-item-has-children').each(function () {
    var a = $(this).children('a');
    if ($(this).find('.menu-item-has-children-toggler').length <= 0) {
      var plus = $('<span class="menu-item-has-children-toggler">+</span>');
      plus.insertAfter(a);
    }
  });

  $('.nav-mobile li.menu-item-has-children').unbind('click');
  $('.nav-mobile li.menu-item-has-children').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).children('span').html('-');
    } else {
      $(this).children('span').html('+');
    }

    $(this).children('ul').slideToggle();
  });


  $('.product-archive-more-wrapper button.btn').on('click', function () {
    $('.product-archive-more-text').slideToggle();
    $('.product-archive-less-btn').toggle();
    $('.product-archive-more-btn').toggle();

  });


  $('.tng-share-button').on('click', function () {
    $('.tng-share-section').slideToggle();
  });


  $('.tng-overview-item-link').click(function () {
    location.href = $(this).attr('data-href');
  });

  $('.tng-newsletter-btn').click(function (e) {
    e.preventDefault();
    //if($('div.mailpoet_form_shortcode').find('.mailpoet_form_close_icon').length <= 0) {
    //    $('div.mailpoet_form_shortcode').prepend('<div class="mailpoet_form_close_icon" ><img class="" alt="close" width="20" height="20" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtvcGFjaXR5OjAuNjt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+Cjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjE2LDM0IDI1LDI1IDM0LDE2ICIvPgo8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIxNiwxNiAyNSwyNSAzNCwzNCAiLz4KPC9zdmc+Cg=="></img></div>');
    //}
    $('#cleverreach_wrapper, .mailpoet_form_popup_overlay').addClass('active');
  });
  $(document).on('click', '.cleverreach_wrapper_closer', function () {
    $('#cleverreach_wrapper, .mailpoet_form_popup_overlay').removeClass('active');
  });

  $(document).on('click', '#cleverreach_wrapper button[type="submit"]', function (e) {
    e.preventDefault();
    if ($('#cleverreach_wrapper input[name="dsgvo-confirm"]').prop('checked')) {
      $('#cleverreach_wrapper input[name="dsgvo-confirm"]').parent().removeClass('tng-notchecked');
      $('#cleverreach_wrapper form').submit();
    } else {
      $('#cleverreach_wrapper input[name="dsgvo-confirm"]').parent().addClass('tng-notchecked');
    }
  });

  $('.vc_basic_grid').click(function (e) {
    e.preventDefault();
    if ($(this).find('.vc_btn3-container a.vc_general').length <= 0)
      return '';
    location.href = $(this).find('.vc_btn3-container a.vc_general').attr('href');

  });


  function indexOfMax(arr) {
    if (arr.length === 0) {
      return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }

    return maxIndex;
  }

  function setEqualheight() {
    if ($(window).width() <= 767) {
      $('.vc_row-o-equal-height').find('.vc_column_container').css('min-height', '100%');
    } else {
      $('.vc_row-o-equal-height').each(function () {
        let vc_row_e = $(this);
        var heights = [];
        $(this).find('.vc_column_container').each(function () {
          heights.push($(this).height());
        });
        let minheight = heights[indexOfMax(heights)];
        vc_row_e.find('.vc_column_container').css('min-height', minheight + 'px');
      });
    }

  }

  $(window).load(function () {
    setEqualheight();
  });
  setEqualheight();
  $(window).resize(function () {
    setEqualheight();
  });

  // ALLE NEWS / PRESSEARTIKEL AUF SELBE HOEHE
  function tng_news_article_height() {
    if ($('body.category-wissen, body.category-news .tng-card-columns .card').length > 0 || $('body.category-news, body.category-news .tng-card-columns .card').length > 0 || $('body.category-presseartikel, body.category-news .tng-card-columns .card').length > 0) {
      let cardheights = [0];
      $('.tng-card-columns .card').each(function () {
        cardheights.push($(this).height());
      });
      let cardmaxheight = Math.max.apply(Math, cardheights);
      $('.tng-card-columns .card').each(function () {
        $(this).css('min-height', cardmaxheight);
      });
    }
  }

  $(window).load(function () {
    tng_news_article_height();
  });
  $(window).resize(function () {
    tng_news_article_height();
  });


});
/* www.metaconsulting.net - Martin Sternsberger */
/* Helper functions */

// Open all PDF-files in a new tab
jQuery.noConflict();

jQuery(document).ready(function($){
	$("a[href$='pdf']").attr('target','_blank');
});
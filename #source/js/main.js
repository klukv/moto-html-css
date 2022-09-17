//@prepros-append jq-start.js 
//@prepros-append script.js 
//@prepros-append jq-end.js 
$(function () {

	$('.header__btn-menu').on('click', function () {
		$('.header__list').slideToggle();
	});

});



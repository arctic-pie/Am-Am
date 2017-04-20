jQuery.noConflict();
jQuery(document).ready(function ($) {
    $('.single-item').slick({
        dots: true,
        infinite: true, 
        prevArrow: '<div class="slick-prev">Выбери вкус</div>', 
        nextArrow: '<div class="slick-next">Выбери вкус</div>'
    });
    $('.reviews-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
    
    $('.products-item-table-wrapper').perfectScrollbar();
    $('.diploma-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: false,
        variableWidth: true
    });
    $('.faq-area').perfectScrollbar();
    $('#accordion').find('.accordion-toggle').click(function() {
		$(this).next().slideToggle('fast');
		$(".accordion-content").not($(this).next()).slideUp('fast');
		$(".accordion-content").not($(this).next()).parent().removeClass('active');
		$(this).parent().addClass('active');
	});
});
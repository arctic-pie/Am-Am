jQuery.noConflict();
jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        jQuery('.main-header').css('left', 0 - jQuery(this).scrollLeft());
    });
    $('#main-header-dropdown-btn').on('click', function () {
        if ($(this).hasClass('plus')) {
            $(this).removeClass('plus').addClass('minus');
            return
        }
        $(this).removeClass('minus').addClass('plus');
    });
    $('#main-header-dropdown-btn').on('click', function () {
        $('#main-header-dropdown-wrapper').toggle("slow");
    });
    // Smooth Scroll
    $('#main-header-dropdown-wrapper a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    // Popup Gallery
    $('.fancybox').fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });
    // Popup Form
    $(".fancyform").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
});
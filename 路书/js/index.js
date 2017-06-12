$(function() {
    var fullpageSlide = $('.wp-inner').fullpage({

        page: '.page',

        duration: 500,

        drag: false,

        loop: false,

        der: 0.2,

        change: function() {},

        beforeChange: function() {},

        orientationchange: function() {},

        afterChange: function(e) {

        }

    });

    $('.icon-menu').on('tap', function() {
        $('.layer').show();
        $('.menu-inner').fadeIn();
        $(this).hide();
        $('.icon-close').css('display', 'block');
    });
    $('.icon-close').on('tap', function() {
        $('.layer').hide();
        $('.menu-inner').fadeOut();
        $(this).hide();
        $('.icon-menu').css('display', 'block');
    });

})
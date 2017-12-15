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
    var closeModal = function() {
        $('.layer').hide();
        $('.menu-inner').fadeOut();
        $('.icon-close').hide();
        $('.icon-menu').css('display', 'block');
    };
    $('.btn-menu .icon-menu').on('tap', function() {
        $('.layer').show();
        $('.menu-inner').fadeIn();
        $(this).hide();
        $('.icon-close').css('display', 'block');
    });
    $('.btn-menu .icon-close').on('tap', function() {
        closeModal();
    });

    $('.menu-inner .flex-box a').on('tap', function() {
        var index = $(this).data('index');
        $.fn.fullpage.moveTo(index);
        closeModal();
    });

})
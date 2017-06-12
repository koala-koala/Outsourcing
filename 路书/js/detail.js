$(function() {
  //滑动修改
  var w = $("html").width();
  $('.swipe-wrap,.swipe-wrap>li').width(w);
  window.mySwipe = new Swipe(document.getElementById('slider1'), {
    startSlide: 0,
    speed: 1000,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    transitionEnd: function(index, elem) {
    },
    callback: function(index, elem) {
    }
  });
  window.mySwipe = new Swipe(document.getElementById('slider2'), {
    startSlide: 0,
    speed: 1000,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    transitionEnd: function(index, elem) {
    },
    callback: function(index, elem) {
    }
  });



  $('.close-popup').on('tap', function() {
    $('.layer').fadeOut();
    $(this).parent().fadeOut();
  });

  $('.view-transport').on('tap', function() {
    $('.layer').fadeIn();
    $('.popup-transport').fadeIn();
  });
})
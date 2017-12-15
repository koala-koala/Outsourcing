$(function(){
	$(".food_tabTitle li").tap(function(){
	    var index = $(this).index();
	    $(this).addClass("active").siblings("li").removeClass("active");
	    $(".food_tabContent").eq(index).addClass("on").siblings(".food_tabContent").removeClass("on");
	})

//上下滑动
$(document).on("touchstart",function(e){
      var _touch = e.touches[0];
      startY= _touch.pageY;

    });
      $(window).on("scroll touchmove",function(){
      	if($(window).scrollTop()==0){
      		$(".food_tabTitle1").removeClass("fixed");
      		$(".food_tabContent").css("marginTop","0");
      	}else{
      		$(document).on("touchend",function(e){
      		  var _touch = e.changedTouches[0];
      		  endY= _touch.pageY;
		      if(startY-endY<-5){
				 $(".food_tabTitle1").addClass("fixed");
				 $(".food_tabContent").css("marginTop","100px");
				}
			});
      	}
      })
})

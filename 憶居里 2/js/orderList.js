$(function(){

	//滑动
	var w = $("#wrap").width();
	$('.orderlistCon,.orderlistCon>ul').width(w);
	window.mySwipe = new Swipe(document.getElementById('slider3'), {
	          startSlide: 0,
	          speed: 1000,
	          auto: 0,
	          continuous: true,
	          disableScroll: false,
	          stopPropagation: false,
		  callback:function(index){
			$(".listTitle li").eq(index).addClass("active").siblings().removeClass("active");
		        var left = index*25;
		        $(".line").animate({
			    left:left+"%"
		       },500); 
		}
	      });

	$(".orderlistCon").eq(0).addClass("show");
	$(".listTitle li").eq(0).addClass("active");
	$(".listTitle li").tap(function(){
		var _index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		var left = _index*25;
		$(".line").animate({
			left:left+"%"
		},500);
		mySwipe.slide(_index,1000);
	})


})
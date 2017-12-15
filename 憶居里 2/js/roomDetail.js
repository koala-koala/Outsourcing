$(function(){
	//滑动修改
	var w = $("#wrap").width();
	$('.swipe-wrap,.swipe-wrap>li').width(w);
	window.mySwipe = new Swipe(document.getElementById('slider2'), {
	          startSlide: 0,
	          speed: 1000,
	          auto: 3000,
	          continuous: true,
	          disableScroll: false,
	          stopPropagation: false,
	          transitionEnd: function(index, elem) {
	          	//console.log(index);
	          },
	          callback:function(index, elem) {
	          	$("#slider2 .num .nowpage").text(index+1);
	          }
	      });
	var total = mySwipe.getNumSlides();
	$("#slider2 .total").text(total);
	//点击事件
	$(".share-icon").on("tap",function(){
		$(".mask,.sharebox").fadeIn();
	});
	$(".shareCancel").on("tap",function(){
		$(".mask,.sharebox").fadeOut();
	})
	$(document).on("tap",".hint .close",function(){
		$(".hint").fadeOut();
	})
	$(document).on("tap",".word .lookMore",function(){
		if(!$(this).hasClass("greyTxt")){
			$(".wordCon").removeClass("hasMore");
			$(".lookMore").html("<i class='up'></i>收起").addClass("greyTxt");
		}else{
			$(".wordCon").addClass("hasMore");
			$(".lookMore").html("查看更多").removeClass("greyTxt");
		}
		
	});
	$(document).on("tap",".chooze .lookMore",function(){
			if(!$(this).hasClass("greyTxt")){
				$(".chooze .introduce").css('height','auto');
				$(".lookMore").html("<i class='up'></i>收起").addClass("greyTxt");
			}else{
				$(".chooze .introduce").css('height','600px');
				$(".lookMore").html("查看更多").removeClass("greyTxt");
			}
		});
	//截取高度
	var len = $(".chooze .show li").length;
	if(len>2){
		$(".chooze .show li").each(function(index){
			if(index>1){
				$(this).addClass("hide");
			}
		})

		
	}

	$(".equipment").on("tap",function(){
		$(".popupMask").fadeIn();
	})
	$("#del").on("tap",function(){
		$(".popupMask").fadeOut();
	})
	//新增全屏滚动
	window.mySwipe2 = new Swipe(document.getElementById('sliderbig'), {
				          startSlide: 0,
				          speed: 1000,
				          auto: 0,
				          continuous: true,
				          disableScroll: false,
				          stopPropagation: false,
				          transitionEnd: function(index, elem) {
				          },
				          callback:function(index, elem) {
				          	$(".maskBalck .num .nowpage").text(index+1);
				          }
			});
	var total2 = mySwipe2.getNumSlides();
	$(".maskBalck .num .total").text(total2);
	let wheight = $(".swipe-wrap").height();
	$(".top").css({
		"width":"100%",
		"height":wheight
	})
	$(document).on("tap","#slider2 li",function(){
		$('.maskBalck').css('z-index','100');
	 	var _index = $(this).index();
		mySwipe2.slide(_index,1000);

		$(".maskBalck").tap(function(e){
			if(e.target.className=="maskBalck"){
			$('.maskBalck').css('z-index','-1');
			}
		})
	});


	//日历	
	var cal = new calendar({
	  wrapper: '.calenderBody',
	  onElement: '.checkShow',
	  startDate: new Date(),
	  onReserve: function(){
	    $(".startTime").text(cal.ReseveDate().replace(/\//g,'.'));
	  },
	  onLeave: function(){
	    $(".endTime").text(cal.LeaveDate().replace(/\//g,'.'));
	  }
	});

	
})
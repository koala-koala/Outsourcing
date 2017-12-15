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
	$(".share-icon").tap(function(){
		$(".mask,.sharebox").fadeIn();
	});
	$(".shareCancel").tap(function(){
		$(".mask,.sharebox").fadeOut();
	})
	
	$(document).on("tap",".word .lookMore",function(){
		if(!$(this).hasClass("greyTxt")){
			$(".wordCon").removeClass("hasMore");
			$(".word  .lookMore").html("<i class='up'></i>收起").addClass("greyTxt");
		}else{
			$(".wordCon").addClass("hasMore");
			$(".word  .lookMore").text("查看更多").removeClass("greyTxt");
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

	$(".equipment").on("tap",function(){
		$(".popupMask").fadeIn();
	})
	$(".popupMask").on("tap",function(){
		$(this).hide();
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
	var total2 = $("#sliderbig li").length;
		$(".maskBalck .num .total").text(total2);

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

	//判断提交
	var username="",telphone="";
	$(".username,.telphone").on("propertychange input",function(){
		username = $(".username").val();
		telphone = $(".telphone").val();
		if(username !=="" && telphone !==""){
			$(".infoSubmit").removeClass("disabled");
		}else{
			$(".infoSubmit").addClass("disabled");
		}
	})
	

})
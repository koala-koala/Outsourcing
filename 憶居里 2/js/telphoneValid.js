$(function(){
var timer =  null;
$(".sendYzm").tap(function(){
	if(!$(this).hasClass("disabled")){
		var second = 60;
		$(".sendYzm").addClass("disabled");
		timer = setInterval(function(){
			if(second>0){
				second--;
				$(".sendYzm").text(second+"s重新发送");
			}else{
				$(".sendYzm").removeClass("disabled").text("发送验证码");
				clearInterval(timer);
			}
		},1000)
	}
})
})
$(function(){

var myscroll=null;

$('.wp-inner').fullpage({

	      page: '.page',

	      duration: 500,

	      drag: false,

	      loop: false,
		  
		  der: 0.2,

	      change: function () {

	      	$(".dateChooze").hide();

	      },

	      beforeChange: function () {},

	      orientationchange: function () {},

	     afterChange: function(e){

	  	if(e.cur==1){
	  		$.fn.fullpage.stop();
	  		$(".dateChooze").show();

	  	     myScroll = new IScroll( ".listshow",{

	  	          probeType: 3,

	  	          //momentum: false,//�رչ��Ի���

	  	          mouseWheel: true,//��껬�ֿ���

	  	          scrollbars: false,//�������ɼ�

	  	          fadeScrollbars: true,//����������

	  	          interactiveScrollbars: true,//���������϶�

	  	          shrinkScrollbars: 'scale', // �������߽�֮��Ĺ�������������������

	  	          useTransform: true,//CSSת��

	  	          useTransition: true,//CSS���

	  	          bounce: true,//����

	  	          freeScroll: false,//ֻ����һ�������ϻ���

	  	          startX: 0,

	  	          startY: 0
	  	        });



	  	     myScroll.on('scroll', updatePosition);

	  	     myScroll.on('scrollEnd', updatePosition);



	  	     function updatePosition () {
	  	     	if(this.y>=0){
					$.fn.fullpage.start();
	  	     	}
	  	     }
	  	    }   

	  }

	});





})
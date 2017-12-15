/**
 * Created by fanghui on 2016/8/16.
 */
function calendar(options){
  var defaluts = {
    wrapper: 'body',
    onElement :'.time_span',
    startDate: new Date(),
    onReserve: function(){

    },
    onLeave: function(){

    }
  };
  var opts = $.extend({}, defaluts, options);
  var d = opts.startDate;
  var that = this;

  $(opts.wrapper).html('<div class="calender_wrap">\
  <div class="calendermask"></div>\
    <div class="calender" id="calender">\
    <div class="calender_title">日期选择</div>\
      <ul class="ui_week">\
      <li>日</li>\
      <li>一</li>\
      <li>二</li>\
      <li>三</li>\
      <li>四</li>\
      <li>五</li>\
      <li>六</li>\
      </ul>\
      <div class="ui_daybox_wrap">\
      </div>\
      <div class="calender-close"><span class="icon-del" id="del"></span></div>\
    </div>\
  </div>\
  <input type="hidden" id="startTime">\
  <input type="hidden" id="endTime">\
  <input type="hidden" id="hasStartSelect">\
  ')

  var htmlTemp = '<ul class="ui_daybox">\
      <%for(var i=beginDay;i>0;i--){%>\
<li class="calendar_item daypass"></li>\
    <%}%>\
<%for(var i=1;i<=days;i++){%>\
  <% if(new Date(formateDate + "/" + i).getTime()< new Date(now.getFullYear()+"/"+(now.getMonth() + 1)+"/"+(now.getDate())).getTime()){%>\
<li class="calendar_item calendar_item_gray" formateDate="<%=formateDate%>" cid="<%=i%>">\
    <%}else{%>\
<li class="calendar_item" formateDate="<%=formateDate%>" cid="<%=i%>">\
    <%}%>\
    <%if(reserveDay == i){%>\
  <span class="reserve">\
    <%=i%>\
      <br/>\
      入住\
      </span>\
      <%}else if(leaveDay == i){%>\
  <span class="leave">\
    <%=i%>\
      <br/>\
      离开\
      </span>\
      <%}else{%>\
  <%=i%>\
      <%}%>\
</li>\
  <%}%>\
<%for(var j=1;j<=42-beginDay-days;j++){%>\
<li class="calendar_item daypass"></li>\
    <%}%></ul>\
     <div class="month_chooze">\
        <span class="prev-icon icon"></span>\
          <span class="month"><%=month%></span>\
        <span class="next-icon icon"></span>\
      </div>';
console.log(document.getElementById('startTime').value)
  if (document.getElementById('startTime').value) {
    /*$(".time_content").text((document.getElementById('startTime').value == undefined ? '' : document.getElementById('startTime').value) + "-" + (document.getElementById('endTime').value == undefined ? '' : document.getElementById('endTime').value));
    $(".del_timeSpan").show();*/
    d = new Date(document.getElementById('startTime').value)
  }
//getCalendar(d);
  function getCalendar(d) {
    var reserveDay = document.getElementById('startTime').value;
    var leaveDay = document.getElementById('endTime').value;
    var rd = '', ld = '';
    var reDate = new Date(reserveDay), leDate = new Date(leaveDay)
    if (d.getFullYear() == reDate.getFullYear()) {
      if (d.getMonth() == reDate.getMonth())
        rd = reDate.getDate()
    }
    if (d.getFullYear() == leDate.getFullYear()) {
      if (d.getMonth() == leDate.getMonth())
        ld = leDate.getDate()
    }

    var curMonthDays = new Date(d.getFullYear(), (d.getMonth() + 1), 0).getDate();
    var preDays = new Date(d.getFullYear(), (d.getMonth()), 0).getDate();
    var beginDay = new Date(d.getFullYear(), (d.getMonth()), 1).getDay();
    $(".ui_daybox_wrap").html(_.template(htmlTemp)({
      beginDay: beginDay,
      preDays: preDays,
      now: new Date(),
      days: curMonthDays,
      month: d.getMonth() + 1 + "月",
      formateDate: d.getFullYear() + "/" + (parseInt(d.getMonth()) + 1),
      reserveDay: rd,
      leaveDay: ld
    }))
  }

  $(document).on("touchstart",opts.onElement, function () {
    $(".calender_wrap .calendermask").css("z-index", '99').fadeIn();
    $(".calender_wrap .calender").addClass("active");
    if (document.getElementById('startTime').value != undefined && document.getElementById('startTime').value != '') {
      d = new Date(document.getElementById('startTime').value);
    }
    getCalendar(d);
  });


//document.getElementById('calender').scrollSwipe()
$(document).on("touchstart",".next-icon",function () {
  d = new Date(d.getFullYear(), (d.getMonth() + 2), 0);
  getCalendar(d);
})
$(document).on("touchstart",".prev-icon",function () {
  d = new Date(d.getFullYear(), (d.getMonth()), 0);
  getCalendar(d);
})

  // if($.fn&&$.fn.jquery){
  //   //$是jQuery
  //   //$.fn.jquery 值是 jquery 的版本号
  //   var startX,startY,endX,endY;
  //   $(".calender").on("touchstart",function(e){
  //     var _touch = e.originalEvent.targetTouches[0];
  //     startX= _touch.pageX;
  //     startY= _touch.pageY;

  //   });
  //   $(".calender").on("touchend",function(e){
  //     var _touch = e.originalEvent.changedTouches[0];
  //     endX= _touch.pageX;
  //     endY= _touch.pageY;

  //     if(startX-endX>30){
  //       d = new Date(d.getFullYear(), (d.getMonth() + 2), 0);
  //       getCalendar(d);
  //     }
  //     if(startX-endX<-30){
  //       d = new Date(d.getFullYear(), (d.getMonth()), 0);
  //       getCalendar(d);
  //     }

  //   });

  // }else{
  //   //$是其他

  //   var startX,startY,endX,endY;
  //   $(".calender").on("touchstart",function(e){
  //     var _touch = e.touches[0];
  //     startX= _touch.pageX;
  //     startY= _touch.pageY;

  //   });
  //   $(".calender").on("touchend",function(e){
  //     var _touch = e.changedTouches[0];
  //     endX= _touch.pageX;
  //     endY= _touch.pageY;

  //     if(startX-endX>30){
  //       d = new Date(d.getFullYear(), (d.getMonth() + 2), 0);
  //       getCalendar(d);
  //     }
  //     if(startX-endX<-30){
  //       d = new Date(d.getFullYear(), (d.getMonth()), 0);
  //       getCalendar(d);
  //     }
  //   });
  // }
  $(document).on("touchstart", ".calendar_item", function () {
    var now = new Date();
    if(new Date($(this).attr('formateDate') + '/' + $(this).attr("cid")).getTime()>= new Date(now.getFullYear()+'/'+(now.getMonth() + 1)+'/'+(now.getDate())).getTime()){
      if (!$(this).hasClass("time_now")) {
        if (!document.getElementById('startTime').value || document.getElementById('hasStartSelect').value == 0) {
          $(".reserve").parent().html($(".reserve").parent().attr("cid"))
          $(".leave").parent().html($(".leave").parent().attr("cid"))
          $(this).html('<span class="reserve">' + $(this).attr("cid") + '<br/>入住</span>');
          // $(".calender_wrap .mask").css("z-index",'1').fadeOut();
          // $(".calender_wrap .calender").removeClass("active");
          document.getElementById('startTime').value = $(this).attr('formateDate') + '/' + $(this).attr("cid");

          d = new Date(document.getElementById('startTime').value);

          opts.onReserve();
          document.getElementById('hasStartSelect').value = 1;
        } else {
          if (new Date($(this).attr('formateDate') + '/' + $(this).attr("cid")).getTime() <= new Date(document.getElementById('startTime').value).getTime()) {
            $(".reserve").parent().html($(".reserve").parent().attr("cid"))
            $(".leave").parent().html($(".leave").parent().attr("cid"))
            $(this).html('<span class="reserve">' + $(this).attr("cid") + '<br/>入住</span>');
            // $(".calender_wrap .mask").css("z-index",'1').fadeOut();
            // $(".calender_wrap .calender").removeClass("active");
            document.getElementById('startTime').value = $(this).attr('formateDate') + '/' + $(this).attr("cid");
            opts.onReserve();
            d = new Date(document.getElementById('startTime').value);
            document.getElementById('hasStartSelect').value = 1;
          } else {
            $(".leave").parent().html($(".leave").parent().attr("cid"))
            $(this).html('<span class="leave">' + $(this).attr("cid") + '<br/>离开</span>');
            $(".calender_wrap .calendermask").css("z-index", '1').fadeOut();
            $(".calender_wrap .calender").removeClass("active");
            document.getElementById('endTime').value = $(this).attr('formateDate') + '/' + $(this).attr("cid");
            opts.onLeave();
            d = new Date(document.getElementById('startTime').value);
            document.getElementById('hasStartSelect').value = 0;
          }
        }
      }
    }
  })
  $(".calender_wrap .calendermask,#del").on("tap", function (e) {
    $(".calender_wrap .calendermask").fadeOut();
      $(".calender_wrap .calender").removeClass("active");
      document.getElementById('hasStartSelect').value = 0;
      setTimeout(function(){
        $(".calender_wrap .calendermask").css("z-index", '1');
      },500)
    
  })

  var reset =  function(){
    $(".reserve").parent().html($(".reserve").parent().attr("cid"))
    $(".leave").parent().html($(".leave").parent().attr("cid"))
    document.getElementById('endTime').value = "";
    document.getElementById('startTime').value = "";
    document.getElementById('hasStartSelect').value = 0;
    d = new Date();
  }
  return {
    reset : reset,
    ReseveDate :function(){return document.getElementById('startTime').value},
    LeaveDate : function(){return document.getElementById('endTime').value}
  }
}

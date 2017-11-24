//手机号验证
function checkPhone(phone){
    if(!(/^1[34578]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }
}
//邮箱验证
function checkemail( email_address ){
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if ( !regex.test( email_address ) ){
        alert( "您输入的电子邮件地址不合法" );
        return false;
    }else{
        return true;
    }
}
//存储cookie
function setCookie(name,value){
    var hours = 2; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + hours*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}
//读取cookies
function getCookie(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }else{
        return null; 
    }
} 
//删除cookie
function delCookie(name) { 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
    } 
} 
//计时器（获取验证码后的60s倒计时）
function timeFun(){
    if (wait == 0) {
        $('.haveNumBtn').html('获取验证码');
        $('.haveNumBtn').removeClass('CountDown');
        $('.haveNumBtn').prop('disabled',false);
        wait = 60;
    }else{
        wait --;
        $('.haveNumBtn').html(wait+'s');
        setTimeout(function(){
            timeFun();
        },1000);
    }
}
//点击全选 checkbox全部选中  checkbox有一个未选中则全选不被勾选
function allCheckFun(){
    $('.allCheck').click(function(){
      if ($('.allCheck').prop('checked')) {
        $('.allowCheck').prop('checked',true);
      }else{
        $('.allowCheck').prop('checked',false);
      }
    })
    $('.allowCheck').click(function(){
      console.log($('.allowCheck').index(this));
      var _this = $(this);
      if (_this.prop('checked')) {
        var i = 0;
        for (i = 0; i < $('.allowCheck').length; i++) {
          if (!$('.allowCheck').eq(i).prop('checked')) {
            console.log('i',i);
            break;
          }
          if (i == $('.allowCheck').length - 1) {
            $('.allCheck').prop('checked', true);
          }
        }
      } else {
        $('.allCheck').prop('checked', false);
      }
    })
}
//时间输入时，结束时间必须大于等于开始时间
function dateSearch(){
    $('.end,.start').change(function(){
      var _this = $(this);
      if ($('.start').val()>$('.end').val() && $('.end').val()!='') {
        _this.val('');
        alert('结束时间请大于开始时间');
      }
    })
}
//时间戳转化成xxxx年-xx月-xx日 xx时：xx分：xx秒
function getTimeData(x){
    var d = new Date(x);
    var Y = d.getFullYear();
    var M = d.getMonth()+1;
    if (M<=9) {
      M = '0'+M;
    }else{
      M = M;
    }
    var day = d.getDate();
    if (day<=9) {
      day = '0'+day
    }else{
      day = day;
    }
    var hour = d.getHours();
    if (hour<10) {
      hour = '0' + hour;
    }else{
      hour = hour ;
    }
    var min = d.getMinutes();
    if (min<10) {
      min = '0' + min;
    } else {
      min = min;
    }
    var sec = d.getSeconds();
    if (sec<10) {
      sec = '0'+sec;
    } else {
      sec = sec;
    }
    return  Y+'-'+M+'-'+day+'  '+hour+':'+min+':'+sec;
}
//时间戳转化成xxxx年-xx月-xx日
function getYearData(x){
    if (isNaN(x)) {
        return x;
    }else if(x == null){
        return '';
    }else{
        var d = new Date(x);
        var Y = d.getFullYear();
        var M = d.getMonth()+1;
        if (M<=9) {
            M = '0'+M;
        }else{
            M = M;
        }
        var day = d.getDate();
        if (day<=9) {
            day = '0'+day
        }else{
            day = day;
        }
        var hour = d.getHours();
        if (hour<10) {
            hour = '0' + hour;
        }else{
            hour = hour ;
        }
        var min = d.getMinutes();
        if (min<10) {
            min = '0' + min;
        } else {
            min = min;
        }
        var sec = d.getSeconds();
        if (sec<10) {
            sec = '0'+sec;
        } else {
            sec = sec;
        }
        return  Y+'-'+M+'-'+day;
    }
}
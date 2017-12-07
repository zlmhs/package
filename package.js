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
    //全选按钮点击时
    $('.allCheck').click(function(){
      if ($('.allCheck').prop('checked')) {
        $('.allowCheck').prop('checked',true);
      }else{
        $('.allowCheck').prop('checked',false);
      }
    })
    //checkbox点击时
    $('.allowCheck').click(function(){
      console.log($('.allowCheck').index(this));
      var _this = $(this);
      if (_this.prop('checked')) {
        var i = 0;
        for (i = 0; i < $('.allowCheck').length; i++) {
            //如果有checkbox未被点击，就跳出循环，在循环外面执行
          if (!$('.allowCheck').eq(i).prop('checked')) {
            console.log('i',i);
            break;
          }
          //如果一直执行i等于所有的checkbox的长度-1的时候，说明最后一个checkbox也被选中，此时全选按钮要时勾选状态
          if (i == $('.allowCheck').length - 1) {
            $('.allCheck').prop('checked', true);
          }
        }
      } else {
          //如果有一个checkbox被取消勾选，则全选按钮取消勾选
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
// 下拉菜单
function dropList(){
    $('.allowCl').click(function(){
        var _this =$(this);
        var nodeC = $(this).attr('class').split(' ')[0];
        var allImg = _this.parent().find('.newsSelect');
        var i = $('.allowCl').index(this);
        if ($(this).next().css('display') == 'block') {
            $('.dropList').eq(i).hide();
            allImg.attr('src','../../images/input_select_close.png');
        }else{
            $('.dropList').hide();
            $('.dropList').eq(i).show();
            allImg.attr('src','../../images/input_select_open.png');
        }
        $('.dropList').eq(i).find('li').click(function(){
            var _this = $(this);
            var htm = _this.html();
            if (htm == '需要') {
                $('.pianoDiv').css('display','inline-block');
            }else if(htm == '不需要'){
                $('.pianoDiv').hide();
            }
            if (htm == '多图') {
                $('.alertMess').css('display','inline-block');
            }else if(htm == '单图'){
                $('.alertMess').hide();
            }
            var id = _this.attr('abc');
            _this.parent().prev().val(htm);
            _this.parent().prev().attr('abc',id);
        })
        //点击document下拉菜单消失
        setTimeout(function(){
            $('body').on('click',function (event) {
                if (event.target.className.indexOf(nodeC)!=0) {
                    $('.dropList').eq(i).hide();
                    allImg.attr('src','../../images/input_select_close.png');
                    $('body').off('click');
                }
            });
        },200)
    })
}
//存储session
function setSession(key,value){
    sessionStorage.setItem(key,value);
}
//获取Session
function getSession(key){
    return sessionStorage.getItem(key);
}
//清除Seeion
function clearSession() {
    sessionStorage.clear();
}
//用户登录网站，两小时无任何操作，退出登录
function checkUserFun(){
    var maxTime = 2*60*60; // seconds  (2小时)
    var time = maxTime;
    $('body').on('keydown mousemove mousedown click scroll', function(e){
        time = maxTime; // reset
    });
    var intervalId = setInterval(function(){
        time--;
        if(time <= 0) {
            ShowInvalidLoginMessage();
            clearInterval(intervalId);
        }
    },1000)
    function ShowInvalidLoginMessage(){
        clearSession();
        alert('页面失效，请重新登录');
        location.reload();
    }
}
//
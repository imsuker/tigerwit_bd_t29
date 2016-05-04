$(function() {
    $(".hy-tabs-ul li").each(function(index){
        var liCurrent = $(this);
        var liIndex = index;
        liCurrent.click(function(){
            // console.info(index);
            liCurrent.addClass("hy-tabs-ul-active").siblings().removeClass("hy-tabs-ul-active");
            $(".hy-tabs-con .hy-tabs-con1:eq(" + liIndex +")").addClass("div-block").siblings().removeClass("div-block");

        });
    });
});

//方法获取cookie
function getCookie(name)
{
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
    return unescape(arr[2]);
  }
  else{
    return null;
  }
}
function isLogin(){
  var user_code = getCookie('user_code');
  if(user_code){
    return true;
  }else{
    return false;
  }
}

$(function(){
  var dEnroll = $(".enroll");
  dEnroll.click(function(){
    if(!isLogin()){
       toLogin();
       return;
    }else{
      layer.load();
      var game = $(this).attr('_type');
      var varName = 'var' + new Date().getTime();
      $.getScript('https://www.tigerwit.com/action/public/v3/apply_to_game?'+$.param({
        game : game,
        'var' : varName 
      }),function(){
        var rs = window[varName];
        if(rs && rs.is_succ){
          
        }
        layer.closeAll('loading');
        layer.alert('报名成功', {
            skin: 'layui-layer-molv' //样式类名
            ,closeBtn: 0
        }, function(){
        });
      });
    }
    var _type = $(this).attr('_type');
  });
  function toLogin(){
    layer.confirm('需要登录后才可以报名', {
        btn: ['登录','注册','暂不'] //按钮
    }, function(){
      location.href="https://www.tigerwit.com/space/#/account/login?back="+location.href;
    }, function(){
      location.href="https://www.tigerwit.com/space/#/account/register";
    },function(){
    });
    $(".layui-layer-close1").remove();
  }
});

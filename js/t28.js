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

function info() {
    alert("2016年5月5日开始报名");
}
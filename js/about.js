$(function(){
    $('.aa').click(function(){
        var index = $(this).index();
        // console.log(index);
        $('.right').eq(index).show();
        $('.right').eq(index).siblings().hide();
    })
})
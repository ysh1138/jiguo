function xMove(){
    var timer = null;
    var timer2 = null;
    var index = 0;
    var con = document.getElementsByClassName('litBox')[0];
    var imgs = document.querySelector('.mb2').children;
    clearInterval(timer)
    timer = setInterval(function (){
        index++;
        if(index>=imgs.length){
            index = 0;
        }
        // 动起来
        var step = 0;
        var maxStep = 20;
        var start = con.scrollLeft;  //判断开始位置
        var end = imgs[0].offsetWidth * index;   ///判断结束位置
        var avg = (end - start) / maxStep; //判断每次移动多少
        timer2 = setInterval(function (){
            step++;
            if(step>=maxStep){
                step = 0;
                clearInterval(timer2)
            }
            start += avg;
            con.scrollLeft = start;
            
        },60)
    },4000)
}
xMove();
function action(){
    // 创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('microsofy.XMLHTTP');
    // 建立连接
    ajax_.open('get','http://192.168.1.29:3000/useing/public',true);
    // 发送请求
    ajax_.send();
    // 接收数据
 
    ajax_.onreadystatechange = function(){
        if(ajax_.readyState == 4){
            if(ajax_.status == 200){
                var data_ = ajax_.responseText;
                data_ = JSON.parse(data_)
                // console.log(data_);
                // console.log(str_.name);
                // console.log(str_.hoby[0]);
                var tmpText = doT.template(document.getElementById('list_temp').innerHTML);
                document.getElementById('list').innerHTML = tmpText(data_);
            } else {
                console.log('请求失败');
            }
        }
    }    
}
action();
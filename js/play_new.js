
// function xuan() {
//     var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp');
//     ajax.open('get', 'http://192.168.1.29:3000/play/new', true);
//     ajax.send();
//     ajax.onreadystatechange = function () {
//         if (ajax.readyState == 4) {
//             if (ajax.status == 200) {
//                 // 2、找到数据
//                 var data = JSON.parse(ajax.responseText);
//                 /*  5.调用方式  找到模板 把数据传进去*/
//                 // var tmpText = doT.template(模板);
//                 // tmpText(数据源);

//                 var tmpText = doT.template(document.getElementById('temp_id').innerHTML);
//                 // 渲染到指定位置
//                 document.getElementsByClassName('item_list')[0].innerHTML = tmpText(data[0]);
//             }
//         }
//     }
// }
// xuan();
var ajax_ = new XMLHttpRequest() || new ActiveXObject();
ajax_.open('get', 'http://192.168.1.29:3000/play/new', true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText);
            console.log(data);
            show(data);

        }
    }
}
function show(val) {
    var str = '';
    for (var i of val) {
        for (var k of i) {
            str += '<li>';
            str += '<img src="' + k.img + '"+ alt="">';
            str += '<div class="icon">';
            str += '<h4>' + k.text + '</h4>';
            str += '<p>' + k.description + '</p>';
            str += '<div class="icon_xia">';
            str += '<div class="ll">';
            str += '<span>' + k.price + '<span>';
            str += '</div>'
            str += '<div class="rr">';
            str += '<span>';
            str += '<img src="../css/img/xin.png" alt="">';
            str += ' ' + k.like;
            str += '</span>';
            str += '<span>';
            str += '<img src="../css/img/reply.png" alt="">';
            str += ' ' + k.words;
            str += '</span>';
            str += '</div>'
            str += '</div>'
            str += '</div>'
            str += '</li>';
        }

    }
    var ul = document.getElementsByClassName('item_list')[0].innerHTML = str;
}


// 展示方法 show()
// function show(val) {
//     var str = '';
//     for (var i of val) {
//         //var img_ = i.img.replace(/192.168.1.64/g, '192.168.1.29');
//         str += '<div class="guid-in">';
//         str += '<img src="' + i.img + '"+ alt="">';
//         str += '<p>' + i.text + '</p>';
//         str += '<div class="guid-zan">';
//         str += '<div class="guid-zan-a">';
//         str += '<span>';
//         str += '<img src="../css/img/xin.png" alt="">';
//         str += '</span>';
//         str += i.like;
//         str += '</div>';
//         str += '<div class="guid-zan-b">';
//         str += '<span>';
//         str += '<img src="../css/img/reply.png" alt="">';
//         str += '</span>';
//         str += i.words;
//         str += '</div>';
//         str += '</div>';
//         str += '</div>';
//     }
//     var div = document.getElementsByClassName('item_list')[0].innerHTML = str;

// }
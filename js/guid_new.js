var ajax_ = new XMLHttpRequest() || new ActiveXObject();
ajax_.open('get', 'http://192.168.1.29:3000/guid/new', true);
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
    // for (var i of val) {
    for (var k of val) {
        str += '<li>';
        str += '<a href="guid_details.html">';
        str += '<div class="kuang1">' + '</div>';
        str += '<div class="kuang2">' + '</div>';
        str += '<img src="' + k.img + '"+ alt="">';
        str += '<div class="icon">';
        str += '<h4>' + k.text + '</h4>';
        str += '<div class="icon_xia">';
        str += '<div class="rr">';
        str += '<span>';
        str += '<img src="../css/img/xin.png" alt="">';
        str += ' ' + k.like;
        str += '</span>';
        str += '<span>';
        str += '<img src="../css/img/reply.png" alt="">';
        str += ' ' + k.words;
        str += '</span>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</a>';
        str += '</li>';
    }

    // }
    var ul = document.getElementsByClassName('item_list')[0].innerHTML = str;
}
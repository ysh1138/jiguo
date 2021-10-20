function sub() {
    var phone = document.getElementsByTagName('input')[0];
    var yzm = document.getElementsByTagName('input')[1];
    var num = document.getElementsByTagName('input')[2];
    var name = document.getElementsByTagName('input')[3];
    var pwd = document.getElementsByTagName('input')[4];
    var pwdAgain = document.getElementsByTagName('input')[5];
    var submit_ = document.getElementsByTagName('input')[6];
    phone.onfocus = function () {
        // console.log(this.nextSibling);
        this.nextSibling.innerText = '请输入11位手机号'
        this.nextSibling.style.color = 'black'
    }
    phone.onblur = function () {
        // console.log(this.nextSibling);
        var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        if (reg.test(this.value)) {
            this.nextSibling.innerText = '手机号正确';
            this.nextSibling.style.color = 'green';
            return true;
        } else {
            this.nextSibling.innerText = '请输入正确的手机号';
            this.nextSibling.style.color = 'red'
            return false;
        }
        // return flag;

    }
    
    yzm.onblur = function () {
        // console.log(flag);
        if (yzm.value.toUpperCase() == 'R2B7') {
            return true;
        } else {
            return false;
        }
    }
    num.onblur = function () {
        var regN = /^\d{4}$/;
        if (regN.test(num.value)) {
            return true;
        } else {
            return false;
        }
    }

    name.onfocus = function () {
        // console.log(this.nextSibling);
        this.nextSibling.innerText = '请输入2-10位用户名'
        this.nextSibling.style.color = 'black'
    }
    name.onblur = function () {
        // console.log(this.nextSibling);
        var reg = /^\w{2,10}$/;
        if (reg.test(this.value)) {
            this.nextSibling.innerText = '用户名正确';
            this.nextSibling.style.color = 'green';
            return true;
        } else {
            this.nextSibling.innerText = '请输入正确的用户名';
            this.nextSibling.style.color = 'red'
            return false;
        }
    }
    pwd.onfocus = function () {
        // console.log(this.nextSibling);
        this.nextSibling.innerText = '请输入6-12位密码'
        this.nextSibling.style.color = 'black'
    }
    pwd.onblur = function () {
        // console.log(this.nextSibling);
        var reg = /^\d{6,12}$/;
        if (reg.test(this.value)) {
            this.nextSibling.innerText = '密码正确';
            this.nextSibling.style.color = 'green';
            return true;
        } else {
            this.nextSibling.innerText = '请输入正确的密码';
            this.nextSibling.style.color = 'red'
            return false;
        }
    }
    pwdAgain.onfocus = function () {
        // console.log(this.nextSibling);
        this.nextSibling.innerText = '请重复密码'
        this.nextSibling.style.color = 'black'
    }
    pwdAgain.onblur = function () {
        if (this.value == pwd.value && this.value != '') {
            this.nextSibling.innerText = '密码正确';
            this.nextSibling.style.color = 'green';
            return true;
        } else {
            this.nextSibling.innerText = '请输入正确的密码';
            this.nextSibling.style.color = 'red'
            return false;
        }
    }
    
    submit_.onclick = function () {
        if(phone.onblur()&&yzm.onblur()&&num.onblur()&&name.onblur()&&pwd.onblur()&&pwdAgain.onblur()){
            window.location.href = './index.html'
        }else{
            alert('输入信息有误，请重新输入！')
        }
    }
    // submit_.onclick  = function(){
    //     var regP = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    //     var regN = /^\d{4}$/;
    //     var regPwd = /^\d{6,12}$/;
    //     var flag = true;
    //     if(regP.test(phone.value)){
    //         flag = flag;
    //     }else{
    //         flag = false;
    //     }
    //     if(yzm.value.toUpperCase() == 'R2B7'){
    //         flag = flag;
    //     }else{
    //         flag = false;
    //     }
    //     if(regN.test(num.value)){
    //         flag = flag;
    //     }else{
    //         flag = false;
    //     }
    //     if(regPwd.test(pwd.value) && regPwd.test(pwdAgain.value)){
    //         if(pwd.value == pwdAgain.value){
    //             flag = flag;
    //         }
    //     }else{
    //         flag = false;
    //     }
    //     if(flag){
    //         window.location.href = '../index.html'
    //     }else{
    //         alert('信息输入有误')
    //     }
    // }
}
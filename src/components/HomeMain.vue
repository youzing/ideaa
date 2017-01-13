<template>
  <div class = "content">
  <div class="sharplogin">
    <div class="login" id="QR">二维码登陆
    </div>
    <div class="login" id="PASS">账号密码登陆</div>
    <div class="QRlogin1"></div>
    <div class="PASSlogin2"></div>
  </div>
   <div class="touchlogo"><a href="http://mail.163.com/html/mail_intro/" target="_blank" title="流转系统"><img src=".././assets/login.png" alt="中国流转第一品牌" /></a></div>
  </div>

</template>
<style>
  .touchlogo{
    top:0;
    position: absolute;
    z-index: 1;
  }
  .sharplogin{
    padding:10px;
    background: yellow ;
    top:10%;
    width: 23%;
    height: 75%;
    right: 8%;
    position: absolute;
    -webkit-border-radius: 9px; 
    z-index: 2;
  }
  .login{
    position: absolute;
    z-index: 3;
    top:0;
    height: 13%;
    background: white;
    width: 50%;
  }
  #PASS{
    left:50%;
    overflow-x:auto;
    -webkit-border-top-right-radius: 9px;
    background:  no-repeat;
    overflow:hidden;
        line-height:46px;
        font-size:14px;
        text-align:center;
        +line-height:48px;
        color:#626262;
        cursor:pointer;
  }
  #QR{
    right:50%;
    overflow-x:auto;
    -webkit-border-top-left-radius: 9px;
        background: url(".././assets/code.png") 23px 17px no-repeat;
        overflow:hidden;
        line-height:46px;
        float:left;
        font-size:14px;
        left : 16px;
        text-align:center;
        +line-height:48px;
        color:#626262;
        cursor:pointer;
  }

</style>
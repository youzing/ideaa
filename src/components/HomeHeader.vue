<template>
  <div class = "head">
     <div class="headerLogo"><a href="http://mail.163.com/html/mail_intro/" target="_blank" title="流转系统"><img src=".././assets/liuzhuan.png" alt="中国流转第一品牌" /></a></div>
     <a class="headerIntro" href="http://mail.163.com/html/mail_intro/" target="_blank" title="流转系统">    <span class="separator">&nbsp;|&nbsp;</span><span class="unvisi">中国流转第一品牌</span></a>
      <nav class="headerNav">
        <a href="http://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac24ebe7a3165848018" target="_blank">帮助</a>
    <span class="separator">&nbsp;|&nbsp;</span>
    <a class="last" href="javascript:void(0)" id="btnQiYu">加入收藏</a>
  </nav>

  </div>

</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .head{
    width:1000px;
    height:21px;
    position:relative;
    margin:0 auto;
    z-index:2;
  }
  .headerLogo{
    top: 12px;
    left: 16px;
    width: 130px;
    position: absolute;
  }
  .headerIntro{
    height: 28px;
    width: 170px;
    display: block;
    background-position: 0 -64px;
    top:20px;
    left:140px;
    position: absolute;
    font-size:18px
  }
.headerNav{top:10px;right:0px;text-align:right;color:#cfd0d0; position: absolute;}
.headerNav a{padding-left:13px;display:inline-block;}
.headerNav .last{padding-left: 0;}
</style>
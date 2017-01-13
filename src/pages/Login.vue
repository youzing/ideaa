<template>
  <div class="container">
   <div class="header">
    <home-header></home-header>
    </div>
    <div class="mainer">
      <home-main></home-main>
    </div>
    <div class='mainfoot'>
      <home-footer></home-footer>
    </div>
  </div>
</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
    width: 100%;
  }
  body{color:#000;background:#fff;font-size:12px;line-height:166.6%;text-align:center;}
 body,input,button{font-family:verdana}
ul{list-style:none}
header,footer,section,aside,nav,hgroup,figure,figcaption{display:block;margin:0;padding:0;border:none}
.fontWeight{font-weight:700;}

a{text-decoration:none;color:#959595}
a:hover{color:#626262}

  .container{
   width: 100%;
   height: 100%;
   overflow: auto;
  }
  .header{
    width: 1000px;
    height: 64px;
    margin:0 auto;
    z-index: 2;
    overflow: hidden;
  }
  .mainer{
    width: 100%;
    height: 543px;
    position: relative;
    background-repeat: no-repeat;
    background-position: center top;
    background: #85daff;
    clear:both;
  }
  .mainfoot{
    height: 63px;
    margin: 0 auto;
    background: #ED9F30;
    position: relative;
  }

</style>
<script>
  import HomeHeader from '../components/HomeHeader.vue'
  import HomeMain from '.././components/HomeMain.vue'
  import HomeFooter from '.././components/HomeFooter.vue'
  export default{
    components: { HomeHeader, HomeMain, HomeFooter }}
</script>
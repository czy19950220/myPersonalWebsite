<template>
  <!--404-->
  <section class="bd clearfix">
    <div class="module-error">
      <div class="error-main clearfix">
        <div class="label"></div>
        <div class="info">
          <h3 class="title">啊哦，你所访问的页面不存在了，可能是炸了</h3>
          <div class="reason">
            <p>可能的原因：</p>
            <p>1.手抖打错了。</p>
            <p>2.链接过了保质期。</p>
          </div>
          <div class="oper">
            <p><a href="javascript:history.go(-1);">返回上一级页面&gt;</a></p>
            <p><router-link to="/">回到网站首页&gt;</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style scoped>
  legend {
    color:#000
  }
  input, button, textarea, select, optgroup, option {
    font-family:inherit;
    font-size:inherit;
    font-style:inherit;
    font-weight:inherit
  }
  input, button, select {
    margin:0;
    *font-size:100%;
    line-height:1.2
  }
  a img, img {
    -ms-interpolation-mode:bicubic
  }
  body {
    background:#FFF
  }
  a {
    color:#06c;
    text-decoration:none
  }
  a:hover, a:active, a:focus {
    color:#06c;
    text-decoration:underline
  }
  table {
    border-collapse:collapse;
    border-spacing:0
  }
  header, aside, section {
    display:block
  }
  body, button, input, select, textarea {
    font:12px/1.5 tahoma, arial, "隶书";
    color:#666
  }
  .center {
    text-align:center
  }
  .clear:after, .clearfix:after {
    content:".";
    display:block;
    clear:both;
    visibility:hidden;
    font-size:0;
    height:0;
    line-height:0
  }
  .clear, .clearfix {
    zoom:1
  }
  .b-panel {
    position:absolute
  }
  .b-fr {
    float:right
  }
  .b-fl {
    float:left
  }
  .error-404 {
    background-color:#EDEDF0
  }
  .module-error {
    margin-top:182px
  }
  .module-error .error-main {
    margin:0 auto;
    width:420px
  }
  .module-error .label {
    float:left;
    width:160px;
    height:151px;
    background:url('./../assets/imgs/error.png') 0 0 no-repeat
  }
  .module-error .info {
    margin-left:182px;
    line-height:1.8;
    text-align: left;
  }
  .module-error .title {
    color:#666;
    font-size:14px
  }
  .module-error .reason {
    margin:8px 0 18px 0;
    color:#666
  }
</style>

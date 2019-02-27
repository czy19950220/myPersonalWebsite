<template>
  <div id="index" @mousemove="mouse1()">
    <el-row justify="center" class="elrow">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple">
          <transition
            name="bounce"
            enter-active-class="bounceInLeft"
            leave-active-class="bounceOutRight"
          >
            <div class="content" v-if="show">内容</div>
          </transition>
          <transition
            name="bounce"
            enter-active-class="bounceInUp"
            leave-active-class="bounceOutRight"
          >
            <img class="img" v-if="show" src="https://czy-1257069199.cos.ap-beijing.myqcloud.com/my-website/imgs/0.jpg"
                 alt="1">
          </transition>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple-light">
          <transition
            name="bounce"
            enter-active-class="bounceInDown"
            leave-active-class="bounceOutRight"
          >
            <img class="img img2" v-if="show"
                 src="https://czy-1257069199.cos.ap-beijing.myqcloud.com/my-website/imgs/1.png"
                 alt="2">
          </transition>
          <transition
            name="bounce"
            enter-active-class="bounceInLeft"
            leave-active-class="bounceOutRight"
          >
            <div class="content content2" v-if="show">内容</div>
          </transition>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple">
          <transition
            name="bounce"
            enter-active-class="bounceInRight"
            leave-active-class="bounceOutRight"
          >
            <div class="content content3" v-if="show">内容</div>
          </transition>
          <transition
            name="bounce"
            enter-active-class="bounceInDown"
            leave-active-class="bounceOutRight"
          >
            <img v-if="show" class="img" src="https://czy-1257069199.cos.ap-beijing.myqcloud.com/my-website/imgs/2.jpg"
                 alt="3">
          </transition>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple-light">
          <transition
            name="bounce"
            enter-active-class="bounceInRight"
            leave-active-class="bounceOutRight"
          >
            <div class="content" v-if="show"
                 style="background-size: cover;background-image: url('https://czy-1257069199.cos.ap-beijing.myqcloud.com/my-website/imgs/3.jpeg')">
              &nbsp;
            </div>
          </transition>
          <transition
            name="bounce"
            enter-active-class="bounceInRight"
            leave-active-class="bounceOutRight"
          >
            <div v-if="show" class="content content4">内容</div>
          </transition>
          <transition
            name="bounce"
            enter-active-class="bounceInRight"
            leave-active-class="bounceOutRight"
          >
            <div v-if="show" class="content content5">内容</div>
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'
  import 'element-ui/lib/theme-chalk/display.css';

  require('vue2-animate/dist/vue2-animate.min.css');

  export default {
    name: "Index",
    data() {
      return {
        show: false
      }
    },
    methods: {
      //鼠标光标设置
      mouse1(e) {
        //判断是否是IE浏览器
        if ((!!window.ActiveXObject || "ActiveXObject" in window)) {
          return;
        }
        let event = e || window.event;
        let drawSize = 10;
        let drawType = '○';
        let floatType = 'floatOne';
        let xPos = event.clientX || event.pageX;
        let yPos = event.clientY || event.pageY;
        $('#index').append(`<div class="draw"
            style="z-index: 10; font-size: ${drawSize} px;position: fixed;
            width: 1px;line-height: 1px;pointer-events: none;
            left:${xPos}px;top:${yPos}px;-webkit-animation:${floatType} .9s 1;
            -moz-animation:${floatType} .9s 1;color:#3a8ee6;">${drawType}</div>`);
        $('.draw').each(function () {
          var div = $(this);
          setTimeout(function () {
            $(div).remove();
          }, 800);
        });
      }
    },
    mounted() {
      //加载条开始
      NProgress.start();
    },
    created() {
      setTimeout(() => {
        //加载条结束
        NProgress.done();
      }, 10);
      setTimeout(() => {
        this.show = true
      }, 300);
    }
  }
</script>

<style scoped>
  #index {
    min-height: 100%;
    width: 100%;
    cursor: url('./../assets/imgs/menghuan.ico'), auto;
    background-color: #333;
  }

  .el-col {
    border-radius: 4px;
  }
  .elrow{
    margin: auto;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .content {
    text-align: center;
    line-height: 100%;
    width: 88%;
    background-color: #993;
    color: #ffffff;
    font-size: 2em;
    margin: 20px auto;
    padding: 18% 0;
  }

  .content2 {
    margin-bottom: 0;
    background-color: #933;
  }

  .content3 {
    background-color: #396;
  }

  .content4 {
    background-color: #c93;
  }

  .content5 {
    background-color: #069;
  }

  .img {
    width: 88%;
    height: auto;
  }

  .img2 {
    margin-top: 20px;
  }
</style>

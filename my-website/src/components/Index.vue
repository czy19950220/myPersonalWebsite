<template>
  <div id="index" @mousemove="mouse1()" @touchmove="">

  </div>
</template>

<script>
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'

  export default {
    name: "Index",
    methods: {
      mouse1(e) {
        let event = e || window.event;
        if (event==undefined){//
          return;
        }
        let H = 0;
        let drawSize = 10;
        let drawType = '○';
        let floatType = 'floatOne';
        let xPos = event.offsetX;
        let yPos = event.offsetY;
        $('#index').append(`<div class="draw"
            style=" font-size: ${drawSize} px;position: fixed;
            width: 1px;line-height: 1px;pointer-events: none;
            left:${xPos}px;top:${yPos}px;-webkit-animation:${floatType} .9s 1;
            -moz-animation:${floatType} .9s 1;color:#33a0fc;">${drawType}</div>`);
        $('.draw').each(function () {
          var div = $(this);
          setTimeout(function () {
            $(div).remove();
          }, 800);
        });
      }
    },
    mounted() {
      NProgress.start();
    },
    created() {
      this.mouse1();
      setTimeout(() => {
        NProgress.done();
      }, 200);
    }
  }
</script>

<style scoped>
  #index {
    height: 100%;
    width: 100%;
    cursor: url('./../assets/imgs/menghuan.ico'), auto;
    background-color: #1D1D1D
  }
</style>

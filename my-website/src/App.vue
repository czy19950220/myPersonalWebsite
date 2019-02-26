<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/css/main.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
export default {
  name: 'App',
  created(){
    router.beforeEach((to, from, next) => {
      // 开始进度条
      NProgress.start();
      // 继续路由
      next()
    });
    router.afterEach(transition => {
      // 结束进度条
      NProgress.done()
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: url("") 16 16,auto;
}
</style>

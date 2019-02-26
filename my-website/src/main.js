// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "jquery";//引入jquery
import {store} from './store/store' //引入store.js
import VueFroala from 'vue-froala-wysiwyg';//froala编辑器
import FastClick from 'fastclick'//解决移动端点击延时
import 'element-ui/lib/theme-chalk/index.css'//引入element-ui的css
import element from './element/index'//按需引入element-ui


Vue.config.productionTip = false

require('es6-promise').polyfill();

Vue.use(element);
Vue.use(VueFroala);

if ('addEventListener' in document) {//fastclick的点击事件
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})

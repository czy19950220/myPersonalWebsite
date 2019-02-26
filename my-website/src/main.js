// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "jquery";//引入jquery
import {store} from './store/store' //引入store.js
import VueFroala from 'vue-froala-wysiwyg';
import FastClick from 'fastclick'

Vue.config.productionTip = false

require('es6-promise').polyfill();

Vue.use(VueFroala);

if ('addEventListener' in document) {
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import Swiper from 'swiper'
import Vuex from 'vuex'
import Store from './store/index.js'
import 'swiper/dist/css/swiper.min.css'

Vue.use(Vuex);
Vue.prototype.$axios=axios;
Vue.prototype.$store=Store;//转换成全局属性
//Vue.config.productionTip = false;

axios.defaults.baseURL = "URL";
axios.defaults.headers['Content-Type']='Application/x-www-form-urlencoded';
//axios.defaults.withCredentials=true;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>',
})

# vue-yes
vue相关学习与练习

vue-cli  axios 设置请求头
Vue.prototype.$axios=axios;
axios.defaults.baseURL = "URL"; // –填写后台请求统一的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false;

  调用时不需要写其他东西 this..$axios.post/get(url,data)

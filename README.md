# vue-yes
vue相关学习与练习

# 1.vue-cli  axios 设置请求头

Vue.prototype.$axios=axios;

axios.defaults.baseURL = "URL"; // –填写后台请求统一的地址

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false;


  调用时不需要写其他东西 this..$axios.post/get(url,data)

## 1.1 在main.js中设置 Vue.prototype.名称
正常插件  axios swiper vuex 

在main.js中设置 Vue.prototype.名称

调用时  this.名称

## 1.2 当前组件生效的css样式
<style scoped>
  
  
  /* 
 
     这个css样式只在当前组件生效 
  
     scoped  当前组件生效
     
  */
  
  
</style>

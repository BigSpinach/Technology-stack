import Vue from 'vue';
import App from "./App.vue";

//引入路由器
// import VueRouter from "vue-router";
import router from "./router/index";
//安装路由器
// Vue.use(VueRouter);

new Vue({
  el:'#root',
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  //注册使用路由器
  router
});
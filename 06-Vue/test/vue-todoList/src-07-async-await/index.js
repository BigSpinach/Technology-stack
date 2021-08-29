//可以在index.js这里 直接引入 @babel/polyfill 用以解决es的新api
//但是这样子并不好，它会引入所有的api，包含了项目中没有使用到的
//所以一般会在webpack 的配置文件中按需配置 这个包
//useBuiltIns:"usage"
// import  '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';



new Vue({
  el:'#root',
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$eventBus = this;
  }
})


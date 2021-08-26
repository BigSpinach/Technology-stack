import Vue from 'vue';
import App from './App.vue';

//1. 引入vue-resource 插件
import VueResource from 'vue-resource';

//2. 声明使用 插件
//vue内部就会安装 veu-resource 这个插件
//结果是： 所有的组件对象都拥有了一个属性 $http 
Vue.use(VueResource);

new Vue({
  el:"#root",
  render : h=>h(App),
  
})




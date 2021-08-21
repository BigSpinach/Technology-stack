// import Vue from 'vue';//默认引入的vue是不带编译期的版本 vue/dist.vue.js
//通过配置引入一个带编译器版本的vue 
// 方式一：引入一个带编译器的版本的vue
// import Vue from 'vue/dist/vue.esm.js';

// 方式二：使用webpack 配置 ，解析的时候给配置一个带编译器版本的vue
// console.log(vue);
import Vue from 'vue';

import App from './App.vue';
//import './css/index.css';
// import './css/index.scss';
// console.log('ok');

// import logo from './img/fighting.png';
// console.log(logo);
// let image = new Image();
// image.src = logo;
// root.appendChild(image);


import Header from "./components/Header.vue";

//全局注册组件
Vue.component('HeaderComponent',Header);

// new Vue({
//   el:"#root",
//   // render : h=>h(App)
//   render:function(createElement){//用来渲染组件标签的函数
//     return createElement(App);//返回 <App/> 
//   }//调用render函数得到它返回的组件标签对象
// })

 new Vue({
    el:"#root",
    components:{
      App
    },
    template:`<App/>`
  })

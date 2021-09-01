import Vue from 'vue';
import App from "./App.vue";

import store from './vuex/store';

new Vue({
  el:'#root',
  render:h=>h(App),
  store //注册使用store，App组件以及App组件下的所有组件都拥有了一个$store
  //底层实现   $store = store;
});
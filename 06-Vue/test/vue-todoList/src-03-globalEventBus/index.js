import Vue from 'vue';
import App from './App.vue';

import App2 from './App2.vue';

//使用工具函数
// import * as storageUtils from './utils/storageUtils.js';




new Vue({
  el:"#root",
  render : h=>h(App),
  beforeCreate(){
    Vue.prototype.$localEventBus = this;
  }
})

new Vue({
  el:"#root2",
  render : h=>h(App2)
})

// Vue.config.silent = true
console.log(Vue.config);

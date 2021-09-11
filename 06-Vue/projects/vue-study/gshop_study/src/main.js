import Vue from 'vue';
import 'lib-flexible/flexible';
//引入vee-validate插件
import './veeValidate/index';

import App from './App.vue';

//路由器
import router from './router/index';

//vuex
import store from './vuex/store.js';
//全局组件
import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue';
Vue.component('HeaderGuide',HeaderGuide);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app');

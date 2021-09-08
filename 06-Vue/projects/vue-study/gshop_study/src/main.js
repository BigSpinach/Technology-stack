import Vue from 'vue';
import 'lib-flexible/flexible';

import App from './App.vue';

//路由器
import router from './router/index';
//全局组件
import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue';
Vue.component('HeaderGuide',HeaderGuide);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');

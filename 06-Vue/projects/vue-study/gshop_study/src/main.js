import Vue from 'vue';
import 'lib-flexible/flexible';

// 引入mock
import './mock/mockServer';

// 引入mint-ui
import { Button } from 'mint-ui'
// Vue.use(Button);
Vue.component(Button.name, Button);
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


import * as API from './api/index';
Vue.prototype.$API = API;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app');

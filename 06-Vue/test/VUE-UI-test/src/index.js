import Vue from 'vue';
import App from "./App.vue";

//全局引入 ui组件
import { Button, Cell } from 'mint-ui';
Vue.component(Button.name, Button)
// Vue.use(Button);

new Vue({
  el:'#root',
  render:h=>h(App),
  components:{
    // Button
  }
});
import Vue from 'vue';
import App from 'App.vue';

//加载全局样式 全局组件 全局指令 全局方法

//编写一个找爸爸的方法，找父级对应的方法，通过 emit执行
Vue.property.$dispatch = function(eventName,value){
  let parent = this.$parent;
  while(parent){
    parent.$emit(eventName,value);
    parent = parent.$parent;
  }
}

new Vue({
  el:'#app',
  render:h=>h(App),//h 底层源码(createElement)
  
})


<template>
  <div class="appContainer">
    <div class="tabsContainer">
      <button @click="currentTabComponent = 'Home'">Home</button>
      <button @click="currentTabComponent = 'Posts'">Posts</button>
      <button @click="currentTabComponent = 'Archive'">Archive</button>
    </div>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Vue from "vue";
//异步组件
Vue.component("asyncComponent", function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: "<div>异步组件!</div>",
    });
  }, 1000);
});

import Home from "./components/Home.vue";
import Posts from "./components/Posts.vue";
import Archive from "./components/Archive";

export default {
  name: "App",
  components: {
    Home: (resolve, reject) => {
      setTimeout(() => {
        resolve(Home);
      }, 1000);
      //发送ajax请求 异步获取组件
    },
    Posts,
    Archive,
  },
  data() {
    return {
      currentItem: 0,
      currentTabComponent: "Home",
    };
  },
};
</script>

<style lang="stylus"  >
.appContainer
  .tabsContainer
    display: flex
    position: fixed
    width: 100%
    left: 0
    top: 0
    button
      // width  33.3333%
      height: 50px
      flex: auto
  
</style>

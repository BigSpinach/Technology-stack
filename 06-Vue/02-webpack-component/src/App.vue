<template>
  <div class="red">
    <h2>APP</h2>
    <p>{{ msg }}</p>
    <headerComponent />
    <header-component />
  </div>
</template>




<script>
//使用局部组件
//1. 引入局部组件
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      msg: "hello Vue Components",
    };
  },
  //注册局部组件
  components: {
    headerComponent: Header,
  },
};
</script>

 


<style >
div.red {
  background-color: red;
}
</style>
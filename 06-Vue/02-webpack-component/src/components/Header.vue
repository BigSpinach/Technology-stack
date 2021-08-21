<template>
  <div class="gray">
    <h3>Header</h3>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Header",
    };
  },
};
</script>

<style scoped>
/* scoped 限定样式只对当前组件有效 */
/* 观察html生成页面：发现scoped原理：当前的组件标签会增加一个特定的属性名，最终会给样式匹配（样式选择器也加上这样的属性）上这个特定的属性名，从而实现样式只对当前组件有效 */
div {
  background-color: gray;
}
</style>
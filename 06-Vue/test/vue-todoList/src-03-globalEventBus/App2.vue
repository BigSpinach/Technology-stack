<template>
  <div class="todo-container">
    <Father ></Father>
  </div>
</template>




<script>
//1.引入局部组件
import Father from "./components/Father.vue";

export default {
  name: "App2",
  components: {
    Father,
  },
};
</script>



<style  scoped>

.todo-container {
  width: 300px;
  margin: 0 auto;
}

</style>


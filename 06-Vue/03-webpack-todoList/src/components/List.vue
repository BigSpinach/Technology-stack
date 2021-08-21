<template>
  <ul class="todo-main">
    <!-- <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo"/> -->
    <Item v-for="(todo, index) in todos" :key="index" :todo="todo" :deleteItem="deleteItem"
    :index="index"/>
  </ul>
</template>

<script>
//1. List 组件中需要引入 item组件
import Item from "./Item.vue";

export default {
  //声明接收属性
  props: ["todos","deleteItem"],
  //2. 注册局部组件
  components: {
    Item,
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
<template >
  <ul class="todo-main">
    <Item v-for="(todo ,index) in todos" 
    :key="index" 
    :todo="todo" 
    :index="index"
    :removeTodo="removeTodo"
    :undateTodoComplate="undateTodoComplate"
    />
  </ul>
</template>




<script>
import Item from "./Item.vue";

export default   {
  name: "Main",
  data() {
    return {};
  },
  props: ['todos','removeTodo','undateTodoComplate'],
  components: {
    Item,
  },
};
</script>






<style  scoped>
/* .main {
  background-color: #fff;
  border: 2px solid goldenrod;
} */

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

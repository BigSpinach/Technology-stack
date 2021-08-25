<template >

  <ul class="todo-main" >
    <Item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"
    :deleteItem="deleteItem"
    :upDateTodos="upDateTodos"
    ></Item>
  </ul>
  

</template>




<script>
//1. 引入局部组件
import Item from "./Item.vue";

export default {
  components:{
    Item
  },
  props:['todos','deleteItem','upDateTodos']
}
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

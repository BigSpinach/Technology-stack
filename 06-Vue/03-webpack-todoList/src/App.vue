<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addItem="addItem"/>
      <!-- 定义绑定数据 -->
      <List :todos="todos" :deleteItem="deleteItem"/>
      <Footer />
    </div>
  </div>
</template>




<script>
//1. App组件中需要引入 Header  Footer  List 等组件
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";

export default {
  data() {
    return {
      todos: [
        { id: 1, title: "吃饭饭", complate: false },
        { id: 2, title: "打豆豆", complate: true },
        { id: 3, title: "睡觉觉", complate: false },
      ],
    };
  },
  //2. 注册局部组件
  components: {
    Header,
    Footer,
    List,
  },
  methods:{
    addItem(todo){
     this.todos.unshift(todo);
    },
    deleteItem(index){
      this.todos.splice(index,1);
    }
  }
};
</script>

<style  scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


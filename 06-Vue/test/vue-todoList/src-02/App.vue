<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :todos="todos" :addTodo="addTodo"></Header>
      <Main
        :todos="todos"
        :deleteItem="deleteItem"
        :upDateTodos="upDateTodos"
      ></Main>
      <Footer
        :todos="todos"
        :checkALL="checkAll"
        :clearFinishTodo="clearFinishTodo"
      ></Footer>
    </div>
  </div>
</template>




<script>
//1.引入局部组件
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

//移入工具库
import {saveTodos,getTodos} from './utils/storageUtils.js'

export default {
  name: "App",
  data() {
    return {
      todos: [],
      // todos: [
      //   { id: 1, title: "吃吃吃", complate: false },
      //   { id: 4, title: "啦啦啦", complate: false },
      //   { id: 3, title: "喝喝喝", complate: false },
      // ],
    };
  },

  mounted() {
    setTimeout(() => {
      //this.todos = JSON.parse(localStorage.getItem("todos_key") || "[]");
      this.todos = getTodos();
    }, 100);
  },

  // 2. 注册使用局部组件
  components: {
    Header,
    Main,
    Footer,
  },
  methods: {
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
    upDateTodos(item, val) {
      item.complate = val;
    },
    addTodo(item) {
      this.todos.unshift(item);
    },
    checkAll(value) {
      this.todos.forEach((item) => {
        item.complate = value;
      });
    },
    clearFinishTodo() {
      this.todos = this.todos.filter((item) => !item.complate);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler:saveTodos
      // handler(value) {
      //   localStorage.setItem("todos_key", JSON.stringify(value));
      // },
    },
  },
};
</script>

<style  scoped>
/* .app {
  margin: 50px auto;
  border: 10px solid #888;
  width: 500px;
} */

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


<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header  :addTodo="addTodo"></Header> -->
      <!-- 通过自定义事件 -->
      <!--  自定义事件名=“对应的回调” -->
      <!-- <Header  @addTodo="addTodo"></Header> -->
      <!-- 通过函数的方式绑定自定义事件 -->
      <Header ref="xxx" />
      <Main
        :todos="todos"
        :removeTodo="removeTodo"
        :undateTodoComplate="undateTodoComplate"
      ></Main>
      <Footer
        :todos="todos"
        :deletFinishItem="deletFinishItem"
        :checkedAllItem="checkedAllItem"
      ></Footer>
    </div>
  </div>
</template>




<script>
//1.引入局部组件
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

//移入工具函数
import {saveTodos,getTodos} from './utils/storageUtils'

export default {
  name: "App",
  data() {
    return {
      todos: [],
      //  todos: [
      //   { id: 1, title: "吃吃吃", complate: false },
      //   { id: 4, title: "啦啦啦", complate: false },
      //   { id: 3, title: "喝喝喝", complate: false },
      // ],
    };
  },
  beforeCreate(){
    //console.log('app:',this );//VueComponent
    // this.__proto__ 指向VueComponent 的原型对象 VueComponent.proptotype
    //注意：VueComponent 属于vue内置对象，对外不能调用
    this.__proto__.aaa=100;
    //this.__proto__.__proto__ 指向Vue.prototype
     this.__proto__.__proto__.bbb=500;
    //this.prototype['ccc']=6666;//vue不允许操作 prototype

    //VueComponent.prototype.__proto__ 指向Vue.prototype

    
  },
  mounted(){
    //给xxx这个元素绑定了一个 名为 addTodo2 ，对应的回调函数为 addTod的自定义事件
    this.$refs.xxx.$on('addTodo2',this.addTodo);
    //在挂载完成后就可以绑定各种自定义事件了
    this.$localEventBus.$on('deletFinishItem');
    this.$localEventBus.$on('checkedAllItem');



    //页面挂载完成后加载数据
    setTimeout(()=>{
      this.todos = getTodos();
      },500)
  },
  components:{
    Header,Footer,Main
  },
  methods:{
    //新增 todo
    addTodo(todo){//
      this.todos.unshift(todo);
    },
    //删除todo
    removeTodo(index){
      this.todos.splice(index,1);
    },
    //更新todos中每一项的状态
    undateTodoComplate(todo,value) {
      todo.complate = value
    },
    //删除已完成的项
    deletFinishItem(){
      this.todos = this.todos.filter(item=>!item.complate)
    },
    //是否全选
    checkedAllItem(value){
      this.todos.forEach(item=>{
        item.complate=value;
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler:saveTodos
    }
  },
  beforeDestroy(){
    this.$refs.xxx.$off('addTodo2');
  }


  
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


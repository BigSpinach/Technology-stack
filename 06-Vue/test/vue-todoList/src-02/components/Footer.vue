<template>
  <!-- <div class="footer">Footer page</div> -->
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckedAll"/>
    </label>
    <span> <span>已完成{{finishSize}}</span> / 全部{{todos.length}} </span>
    
     <button class="btn btn-danger" v-show="finishSize>0" @click="finishComplateTodo">清除已完成任务</button>
  </div>
</template>




<script>
export default {
  data(){
    return {
     
    }
  },
  props:['todos','checkALL','clearFinishTodo'],
  computed:{
    finishSize(){
      //只需要get
      //通过计算 todos中 complate 为 true的项的个数
      return this.todos.reduce((prev,next)=>prev+(next.complate?1:0),0)
      
    },
    isCheckedAll:{
      get(){
        return this.todos.length === this.finishSize && this.finishSize>0
      },
      set(val){
        //修改todos中每一项的complate =val
        this.checkALL(val);
      }
    }
  },
  methods:{
    finishComplateTodo(){
     //修改父组件数据 ： 删除掉complate=true的项
     this.clearFinishTodo();
    }
  }
};
</script>

<style  scoped>
/* .footer {
  background-color: aquamarine;
} */
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>


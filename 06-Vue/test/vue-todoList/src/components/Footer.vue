<template >
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span> <span>已完成{{finishSize}}</span> / 全部{{todos.length}}</span>

    <button class="btn btn-danger" v-show="finishSize>0" @click="removeFinishItem">清除已完成任务</button>
  </div>
</template>




<script>
export default {
  data(){
    return {
    }
  },
  // props:['todos','deletFinishItem','checkedAllItem'],
  props:['todos'],
  computed:{
    finishSize(){
      return this.todos.reduce((prev,next)=>prev+(next.complate?1:0),0);
    },
    isCheckAll:{
      get(){
        return this.todos.length === this.finishSize && this.finishSize>0;
      },
      set(val){
        // console.log(val);
        // this.checkedAllItem(val);
        this.$localEventBus.$emit('checkedAllItem',val);
      }
    }
  },
  methods:{
    removeFinishItem(){
      // this.deletFinishItem()
      this.$localEventBus.$emit('deletFinishItem',val)
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


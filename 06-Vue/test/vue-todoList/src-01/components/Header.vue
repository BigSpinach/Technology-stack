<template>
  <!-- 
    <div class="header"> Header page</div>
  -->
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>




<script>
export default {
  data(){return {
    title:""
  }},
  props: {
    addPlan: Function,
  },
  methods: {
    add() {
      let title = this.title.trim();
      if(!title){
        alert('请输入有效计划');
        return 
      }
      //设计数据---创建要添加的元素 {id:666,title:this.title.trim(),template:false}
      let plan = { id: new Date(), title, complate: false };
      // console.log("add");
      //通知父组件修改数据，调用父组件的方法
      this.addPlan(plan);
      //完善操作
      //不能添加空内容
      //添加一次完成后清空 输入框
      this.title='';
    },
  },
};
</script>

<style  scoped>
/* .header {
  background-color: greenyellow;
} */
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>


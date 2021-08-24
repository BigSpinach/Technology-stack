<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addItem"
      v-model="title"
    />
  </div>
</template>




<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  props: ["todos", "addTodo"],
  methods: {
    addItem() {
      //优化：不能添加空内容
      let str =this.title.trim();
      if(!str){
        alert('不能添加空内容');
        return
      }
      //设计数据
      let item = {
        id: new Date(),
        title:str,
        complate: false,
      };

      //调用父组件的方法，增添 item
      this.addTodo(item);
      //清除输入框
      this.title='';
    },
  },
};
</script>

<style  scoped>
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


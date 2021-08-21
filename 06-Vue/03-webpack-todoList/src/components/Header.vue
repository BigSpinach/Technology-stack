<template>
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
  data() {
    return {
      title: "",
    };
  },
  props:{//限定了属性的名称、属性的值、属性值的必要性、以及对属性值的限定
    "addItem":{
      type:Function,
      required:true,
      // default:'',
      // validator:(value)=>{
      //     return value.length>0;
      // }
    }
  },
  methods: {
    add() {
      //console.log(this.title);
      let title = this.title.trim();
      if(!title){
        alert('不能为空')
        return 
      }
      //1. 创建一个todo用于存储 新增元素的信息
            let todo = {
        id:new Date(),
        title,
        complate:false
      }
      //console.log(todo);
      //2.将todo添加到 数据列表 todos中
      //调用父组件的方法用于修改父组件中的数据
      this.addItem(todo);
      //其他首尾工作
      this.title="";
    },
  },
};
</script>

<style scoped>
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
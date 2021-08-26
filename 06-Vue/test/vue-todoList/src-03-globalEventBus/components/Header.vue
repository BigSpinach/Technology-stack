<template >
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
      v-model="title"
      @keyup.enter="addItem"
    />
  </div>
</template>




<script>
  export default {
    data(){
      return {
        title:'',
      }
    },
    mounted(){
      //console.log(this);//VueComponent {...}
    },
    // props:['todos','addTodo'],
    methods:{
      addItem(){
        if(!this.title.trim()){
          alert('不能提交空内容');
          return
        }
        //设计要增加的元素
        let item = {
          id:new Date(),
          title:this.title,
          complate:false
        }
        //console.log(item);
        //调用父组件新增元素的方法
        //分发事件（执行对应自定义事件所绑定的回调）
        // this.$emit('addTodo',item);
        //通过this.$on 绑定事件的方式，执行（分发）对应的回调
        this.$emit('addTodo2',item);
        // this.addTodo(item);

        this.title=''
      }
    }
  }
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


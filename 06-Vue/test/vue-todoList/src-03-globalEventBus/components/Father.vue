<template>
  <div class="father">
    <Son @my-event="doSomeThing"/>
    <!-- 给子组件Son 上绑定了一个自定义事件 my-event -->
    <!-- 需在子组件中通过执行 $this.emit('my-event') 来分发（触发） 这个自定义事件名对应的方法，执行的时候可以给 执行的回调函数 传递参数$this.emit('my-event'，[...args]); 
    最终会调用父组件中定义的 自定义事件名对应的回调函数@my-event="doSomeThing(a)"-->
  
  <!-- 插槽的使用 -->
  <!-- 对应会替换到子组件 name=name1 的slot标签元素的位置 -->
  <input type="text" slot='name1'>
  
  </div>

  
</template>


<script>
import Son from "./Son.vue";


export default{
  components:{
    Son
  },
  methods:{
    doSomeThing(...args){
      //console.log([...args] );//[100, 2, 3]
      //console.log('ok');
    }
  }
}
</script>

<style  scoped>
.father {
  background-color: #985133;
  width: 200px;
  height:200px;
  padding: 50px;
}
</style>
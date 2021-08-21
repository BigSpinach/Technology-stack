<template>
  <helloWorld></helloWorld>
  <hello-world></hello-world>
</template>

<script>


export default {
 data(){
   return {
     msg:'hello components 组件文件化'
   }   
 },
 components:{//注册局部指令：局部指令只能在当前组件中使用
     helloWorld:helloWorld//指定组件名
   }
}
</script>

<style  scoped>

</style>
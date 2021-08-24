<template >
  <ul class="todo-main"  >
    <Item v-for="(plan, index) in plans" :key="index" :plan="plan" :deletePlan="deletePlan" :index="index" :updataPlan="updataPlan"/>
  </ul>
  <!-- 
   <div class="main">Main page
    在Main 组件中需要引入Item组件 
   <Item/>
   <Item/>
   <Item/>
    -->
</template>




<script>
//1. 引入局部组件
import Item from "./Item.vue";

export default {
  //声明注册组件
  components: {
    Item,
  },
  props: {
    'plans':Array,
    'deletePlan':Function,
    'updataPlan':Function
  },
  methods:{
    // deletePlan(){
    //   console.log('delete');
    // }
  }
};
</script>

<style  scoped>
/* .main {
  background-color: #fff;
  border: 2px solid goldenrod;
} */

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>


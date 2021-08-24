<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addPlan="addPlan"></Header>
      <Main :plans="plans" :deletePlan="deletePlan" :updataPlan="updataPlan"></Main>
      <Footer
        :plans="plans"
        :checkAll="checkAll"
        :clearComplatePlan="clearComplatePlan"
      ></Footer>
    </div>
  </div>

  <!-- <div class="app">
    {{msg}}
     3.页面中使用局部组件 
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div> -->
</template>




<script>
//1.引入局部组件
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
//使用工具函数
import * as storageUtils from './utils/storageUtils.js';
//console.log(storageUtils);

export default {
  name: "App",
  data() {
    return {
      plans:[]
      //可以在这里直接读，也可以异步读取--在组件挂载完成的时候读取
      //  plans: JSON.parse(localStorage.getItem('plans_key')||'[]')
      // plans: [
      //   { id: 1, title: "吃吃吃", complate: false },
      //   { id: 4, title: "啦啦啦", complate: false },
      //   { id: 3, title: "喝喝喝", complate: false },
      // ],
    };
  },
  mounted() {
    // 模拟异步加载
    setTimeout(() => {
      //如果 localStorage中没有存值，返回的是 null
      //所需要对 是null 的时候处理成 []
      // this.plans = JSON.parse(localStorage.getItem('plans_key'))||[];
      //this.plans = JSON.parse(localStorage.getItem('plans_key')||'[]')
      //  storageUtils.getPlans('plans');
      // this.plans =storageUtils.getPlans();
      this.plans =storageUtils.getPlans('plans');
    
    }, 300);
  },
  //2. 声明注册局部组件
  components: {
    Header,
    Footer,
    Main,
  },
  methods: {
    addPlan(item) {
      // console.log(item);
      this.plans.unshift(item);
    },
    deletePlan(index) {
      //console.log('delete');
      this.plans.splice(index, 1);
    },
    checkAll(isCheckALL) {
      //修改plans中每一个plan.complate
      this.plans.forEach((item) => {
        item.complate = isCheckALL;
      });
    },
    clearComplatePlan() {
      //清除已完成的plan  plan.complate=true
      this.plans = this.plans.filter((item) => !item.complate);
    },
    updataPlan(plan,isCheck){
      plan.complate = isCheck;
    }
  },
  computed: {},
  watch: {
    plans: {
      deep: true,
      handler:storageUtils.savePlans
      /*
      handler(value)  {
        //value 就是 plans
        //数据存在哪，存储的数据格式
        //localStorage      json
       // localStorage.setItem("plans_key", JSON.stringify(value));
         //storageUtils.savePlans(value);
        storageUtils.savePlans(value);
      },
      */
    },
  },
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


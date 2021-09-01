<template>
  <ul>
    <li>ID:{{ $route.params.mid }}</li>
    <li>Title:{{ detail.title }}</li>
    <!-- content是根据id 查询得到显示数据 -->
    <li>Content:{{ detail.content }}</li>
  </ul>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
const allDetails = [
  { id: 1, title: "01-蚂蚁已服", content: "11啊吖吖吖吖吖吖吖吖吖吖" },
  { id: 2, title: "02-郑爽xxxx", content: "22啊吖吖吖吖吖吖吖吖吖吖" },
  { id: 3, title: "03-阿里嗝屁了", content: "33啊吖吖吖吖吖吖吖吖吖吖" },
  { id: 4, title: "04-蚂蚁已服", content: "44啊吖吖吖吖吖吖吖吖吖吖" },
];

export default {
  data() {
    return {
      detail: {
        id: 1,
        title: "",
        content: "",
      },
    };
  },
  mounted() {
    //console.log("messageDetail 组件"); //用于验证路由组件的生命周期
    this.showDetail(this.$route);
    // const mid = this.$route.params.mid * 1;
    // setTimeout(() => {
    //   this.detail = allDetails.find((item) => mid === item.id);
    // }, 1000);
  },
  watch: {
    $route(to, from) {
      //监听 route 路由的变化，参数变化这个 route 路由也算变化，变化后就会产生新的路由实例
      //to  指新的路由 实例对象
      //console.log(to,from);
      //console.log(to);
      const mid = to.params.mid * 1;
      setTimeout(() => {
        this.detail = allDetails.find((item) => mid === item.id);
      }, 100);
    },
  },
  methods: {
    //抽离 方法
    /*
    const mid = to.params.mid * 1;
      setTimeout(() => {
        this.detail = allDetails.find((item) => mid === item.id);
      }, 100);
    */
    showDetail(route) {
      // const _this = this;
      // console.log('route----',this);
      // const mid = to.params.mid * 1;
      // setTimeout(() => {
      //   _this.detail = allDetails.find((item) => mid === item.id);
      // }, 100);

      /*
      //setTimeout中的this 非严格模式下是window，严格模式下是undefined
      setTimeout(() => {
        // console.log('setTimeout----',this);
       const detail = allDetails.find((item) => route.params.mid === item.id);
       console.log(detail);
       debugger
       this.detail = detail;
      }, 100);*/

      const result = allDetails.find(
        (item) => route.params.mid * 1 === item.id
      );

      this.detail = result;
    },
  },
};
</script>


<style  scoped>
</style>

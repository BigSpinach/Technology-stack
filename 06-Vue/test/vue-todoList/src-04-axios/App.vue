<template>
  <div class="todo-container">
    <div v-if="!repoName">loading...</div>
    <div v-else>
      更新页面:更新内容是
      <a :href="repoUrl">{{ repoName }}</a>
    </div>
  </div>
</template>




<script>
//引入axios
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      repoName: "",
      repoUrl: "",
    };
  },
  mounted() {
    //使用vue-resource 发送ajax请求
    /*
   this.$http
      .get("https://api.github.com/search/repositories2?q=v&sort=stars")
      .then((response) => {
        // console.log(response.data);
        //传统http请求会直接将请求回来的内容渲染至页面，
        //ajax请求会存放到这个（XMLHttpRequest）对象中

        //处理请求回来的结果
        const result = response.data.items;
        //const repo = result[0].name;
        //const repo_url =result[0].html_url;
        //取数据
        const { name, html_url } = result[0];
        //将取出的数据挂载到当前vue实例的属性上
        this.repoName = name;
        this.repoUrl = html_url;
      })
      .catch((e) => {
        alert(e);
      });
      */

    //使用axios 发送ajax请求
    /*
    axios
      .get("https://api.github.com/search/repositories?",{
        params:{
          // ?q=v&sort=stars
          q:'j',
          sort:'stars'
        }
      })
      .then((response) => {
        //console.log(response);//一个包含了数据的XMLHttpRequest 对象
        const result = response.data;
        const { name, html_url } = result.items[0];
        this.repoName = name;
        this.repoUrl = html_url;
      })
      .catch((e) => {
        alert(e);
      });
      */
     //解决跨域
     
     //'https://localhost:6000/tets/v'  是启动的服务器的地址
     //会报错：Access to XMLHttpRequest at 'http://localhost:6060/test/vue' from origin 'http://localhost:8989' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
     //跨域问题
     //get的路径path 一定要跟 dev-server中配置的 proxy 属性名对应
     // http://localhost:6060/test/vue
      axios.get("/api/test/h")
      .then((response) => {
        const result = response.data;
        const { name, html_url } = result.data;
        this.repoName = name;
        this.repoUrl = html_url;
      })
      .catch((e) => {
        alert(e);
      });
  },
};
</script>



<style  scoped>
</style>


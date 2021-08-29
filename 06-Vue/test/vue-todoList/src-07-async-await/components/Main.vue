<template>
  <div class="row">
    <h2 v-if="firstView">输入用户名进行搜索</h2>
    <h2 v-else-if="loadingView">搜索数据中...</h2>
    <h2 v-else-if="errorMsg">搜索失败，失败的原因是：{{ this.errorMsg }}</h2>

    <div class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchVue from "./Search.vue";

export default {
  data() {
    return {
      users: [],
      firstView: true,
      loadingView: false,
      errorMsg: "",
    };
  },
  mounted() {
    /*
    this.$eventBus.$on("search", (searchValue) => {
      //页面初始换显示 ----第一屏
      //默认显示的第一屏---firstView=true
      //发送ajax请求，显示loading界面  --第二屏
      this.firstView = false;
      this.loadingView = true;

      //发送ajax请求获取服务端数据，
      // ajax请求成功---解析出users数据---第三屏
      //ajax请求失败--显示失败页面 ---第四屏
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: searchValue,
          },
        })
        .then((response) => {
          this.loadingView = false;
          this.users = response.data.items.map(item=>({
            url:item.html_url,
            avatar_url:item.avatar_url,
            username:item.login
          }));
         
        })
        .catch((e) => {
          this.loadingView = false;
          this.errorMsg = e.message;
        });
    });
    */
   
    //  改写成 async,await 的方式
    // 直接写 async ,await 回报这个错：  regeneratorRuntime is not defined
    //原因是 @babel/preset-env 这个预设包不能解析 es6 的新API
    //解决方案：配置 @babel/polyfill 补丁包用以解析 es8的新api  async await
    //查看@babel/polyfill 的package.json文件
    //得到 @babel/polyfill 它其实使用了两个包
    //core-js 包   用以解析 es5、es6、es7等的新 API
    //regenereator-runtime  包   用以解析 es6的新 API
    this.$eventBus.$on("search", async (searchValue) => {
      //第一屏-默认显示
      //第二屏-loading
      this.firstView = false;
      this.loadingView = true;
      try {
        this.loadingView = false;
        //第三屏-请求ajax成功的数据显示
        const result = await axios.get("https://api.github.com/search/users", {
          params: {
            q: searchValue,
          },
        });
        this.users = result.data.items.map((item) => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          username: item.login,
        }));
        // console.log(this.users);
      } catch {
        //第四屏-请求ajax失败的数据显示
        this.loadingView = false;
        this.errorMsg = e.massage;
      }
    });
  },
};
</script>


<style   scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
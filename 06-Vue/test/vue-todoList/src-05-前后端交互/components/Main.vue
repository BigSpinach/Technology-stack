<template>
  <div class="row">
    <h3 v-if="firstView">请输入关键字进行搜索</h3>
    <h3 v-else-if="loading">正在加载搜索数据中...</h3>
    <h3 v-else-if="errorMsg">请求出错，错误信息是：{{ errorMsg }}</h3>
    <div v-else class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import SearchVue from './Search.vue';

export default {
  name: "App",
  data() {
    return {
      users: [1, 2, 3],
      firstView: true,
      loading: false,
      errorMsg: "",
    };
  },
  mounted() {
    this.$eventBus.$on("search", (searchValue) => {
      //初始化显示界面--- 第一屏  firstView
      //1. 更新数据（请求中...）
      //  loading...界面
      this.firstView = false;
      this.loading = true;
      // 发送ajax请求
      axios.get("https://api.github.com/search/users",{
        params:{
          q:searchValue
        }
      }).then(
        (response) => {
          this.loading=false;
          // 成功数据的界面
          // this.users = response.data.items.map(item=>{return {
            this.users = response.data.items.map(item=>({
            username:item.login,
            url:item.html_url,
            avatar_url:item.avatar_url
          }));

          // console.log(this.users[0]);
          
        },
        (err) => {
          // 失败数据的界面 errorMsg
          this.loading=false;
          this.errorMsg = err.message;
        }
      );
    });
  },
};
</script>



<style  scoped>
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

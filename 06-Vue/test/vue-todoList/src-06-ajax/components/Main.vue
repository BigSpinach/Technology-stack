<template>
  <div class="row">
    <h2 v-if="firstView">请输入用户名进行搜索</h2>
    <h2 v-else-if="loading">搜索数据加载中...</h2>
    <h2 v-else-if="errorMsg">搜索出错了，错误原因是：{{ errorMsg }}</h2>
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

export default {
  data() {
    return {
      firstView: true,
      loading: false,
      users: [],
      errorMsg: "",
    };
  },
  mounted() {
    //交互界面更替
    this.$eventBus.$on("search", (searchValue) => {
      //进入loading界面
      this.firstView = false;
      this.loading = true;

      //发送ajax 获取数据，根据获取的数据进行不同界面的展示
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: searchValue,
          },
        })
        .then((response) => {
          this.users = response.data.items.map((item) => ({
            username: item.login,
            url: item.html_url,
            avatar_url: item.avatar_url,
          }));
          console.log(this.users[0]);
          this.loading = false;
        })
        .catch((e) => {
          //显示出错页面
          this.loading = false;
          this.errorMsg = e.massage;
        });
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
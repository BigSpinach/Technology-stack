<template>
  <div>
    Home home Home home Home Home
    <br />

    Home home

    <hr />
    <ul id="listContainer">
      <li
        @click="currentItemIndex = index"
        :class="{ active: index === currentItemIndex }"
        v-for="(i, index) in 100"
        :key="index"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItemIndex: 0,
      currentItemScrollTop: 0, //记录当前元素滚动的距离
    };
  },
  mounted() {
    console.log("Home mounted");

    window.addEventListener("scroll", () => {
      this.currentItemScrollTop = document.documentElement.scrollTop;
    });
    //挂载钩子中实时记录 页面滚动的距离
    //在即将缓存的时候，将页面的高度的数据存储在sessionStorage中
    //在页面重新被激活的时候，读取sessionStorage中的数据
  },

  deactivated() {
    sessionStorage.setItem("scrollTop", this.currentItemScrollTop);
  },
  activated() {
    sessionStorage.getItem("scrollTop") &&
      (document.documentElement.scrollTop =
        sessionStorage.getItem("scrollTop"));
  },
};
</script>

<style scoped lang="stylus">
#listContainer
  li
    height: 50px
    line-height: 50px
  .active
    background-color: red
</style>
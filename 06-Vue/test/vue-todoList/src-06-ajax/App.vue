<template>
  <div class="container">
    <Search />
    <Main />
  </div>
  <!-- 1.拆分组件 
    App
    Search
    Main
  -->
  <!-- 2. 静态组件的编写 -->
  <!-- 3.动态组件 -->
  <!-- 设计数据 -->
  <!-- 
        Serrch组件中有个搜索按钮，点击后要跟Mian组件进行交互，并传递searchValue给Main组
        所以：将绑定事件的操作放在 Main组件中，由 Search 的搜索按钮点击行为触发
      -->
  <!-- 
        Main组件中要有4个界面显示
          - 初始化显示：请输入内容进行搜索
          - 加载搜索内容中...
            - 加载成功后的数据信息
            - 显示搜索失败的数据
      -->

  <!-- 3.1 初始化数据显示 -->
  <!-- 3.2 交互 -->
</template>

<script>
import Search from "./components/Search.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Search,
    Main,
  },
};
</script>

<style lang="scss" scoped>
</style>
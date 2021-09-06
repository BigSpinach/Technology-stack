<template>
  <div id="footerContainer">
    <div
      :class="{ active: $route.path === '/msite' }"
      @click="goPath('/msite')"
      class="guideItem"
    >
      <i class="iconfont icon-shouye"></i><span>首页</span>
    </div>
    <div
      :class="{ active: $route.path === '/search' }"
      @click="goPath('/search')"
      class="guideItem"
    >
      <i class="iconfont icon-sousuo"></i><span>搜索</span>
    </div>
    <div
      :class="{ active: $route.path === '/order' }"
      @click="goPath('/order')"
      class="guideItem"
    >
      <i class="iconfont icon-dingdan"></i><span>订单</span>
    </div>
    <div
      :class="{ active: $route.path === '/profile' }"
      @click="goPath('/profile')"
      class="guideItem"
    >
      <i class="iconfont icon-tubiaolunkuo-"></i><span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPath(path) {
      // 原地路由不允许重复跳转
      // if (this.$route.path !== path) {
      //   this.$router.push(path);
      // }
      //优化
      this.$route.path !== path && this.$router.push(path);
    },
  },
};
</script>

<style lang="stylus"  scoped>
@import '../../common/stylus/mixins.styl';

$color = #FF00FF;

#footerContainer {
  display: flex;
  top-border-1px($color);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #fff;

  .guideItem {
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 50px;
    // line-height 50px
    text-align: center;

    &.active {
      color: $color;
    }

    .iconfont {
      font-size: 22px;
      line-height: 30px;
    }

    span {
      font-size: 14px;
    }
  }
}
</style>

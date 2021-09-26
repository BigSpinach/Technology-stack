<template>
  <div>
    <ShopHeader></ShopHeader>
    <div id="shopContainer">
      <div class="tabs">
        <div class="tab-item">
          <!-- <router-link to="/shop/good">商品</router-link> -->
          <a href="javascript:;" @click="goPath('/shop/good')">商品</a>
        </div>
        <div class="tab-item">
          <router-link to="/shop/rating" replace>评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/info" replace>商家</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ShopHeader from "../../components/ShopHeader/ShopHeader.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: { ShopHeader },
  methods: {
    goPath(path) {
      this.$route.path !== path && this.$router.replace(path);
      // path === "shop/good" && this.$router.push(path);
    },
  },
  async mounted() {
    // let result = await this.$API.mockDatas();
    // console.log(result);
    this.$store.dispatch('getShopDataAction')
    // this.$API.getShopDataAction();
  },
   computed: {
    ...mapState({
      initTest:state=>state.shop.initTest
    })
  },
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#shopContainer
  .tabs
    display: flex
    border-bottom: 1px solid #eee
    .tab-item
      // width 33.3333%
      // flex 1
      flex-grow: 1
      text-align: center
      height: 40px
      line-height: 40px
      font-size: 16px
      a
        display: block
        position: relative
        &.router-link-active
          color: $color
          &:after
            content: ''
            height: 4px
            transform: scaleY(0.5)
            width: 50px
            background: $color
            position: absolute
            left: 50%
            margin-left: -25px
            bottom: 0
</style>
<template>
  <div class="cartcontrol">
    <div
      class="iconfont icon-jianhao"
      @click="updateFoodCount(false)"
    ></div>
    <div class="cart-count">{{ food.count }}</div>
    <div class="iconfont icon-jiahao_round_full" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initData: "初始数据",
    };
  },
  props: {
    food: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateFoodCount(isAdd) {
      console.log('updateFoodCount');
      // console.log(this.food);
      this.$store.dispatch('changeFoodCountAction',{food:this.food,isAdd});
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)
  .icon-jianhao
    display: inline-block
    padding: 2px
    line-height: 24px
    font-size: 24px
    color: $color
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .icon-jiahao_round_full
    display: inline-block
    padding: 2px
    line-height: 24px
    font-size: 24px
    color: $color
</style>


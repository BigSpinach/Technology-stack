<template>
  <div class="cartcontrol">
     <transition name="fade">
      <div v-show="food.count"
        class="iconfont icon-jianhao"
        @click="updateFoodCount(false)"
      ></div>
     </transition>
    <div v-show="food.count" class="cart-count">{{ food.count }}</div>
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
      // console.log('updateFoodCount');
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
  display: inline-block
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
    &.fade-enter-active, &.fade-leave-active 
        // transition: opacity .5s;  
        transition: all .8s ease;    
    &.fade-enter, &.fade-leave-to 
        transform: translateX(10px);
        transform:rotate(180deg);
        opacity: 0;     
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


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
import { SAVE_SHOPDATA ,SAVE_CARTITEMS} from '../../vuex/mutations-type';

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
    // this.$store.dispatch("getShopDataAction");
    // this.$API.getShopDataAction();

    //取shopData数据
    let shopData = JSON.parse(sessionStorage.getItem("shopData_key"));
    // console.log(shopData);
    // debugger;
    if (shopData) {
      //如果存在，就使用sessionStorage中的数据，然后存储到vuex中
      //1. 将读取的数据存入vuex中
      this.$store.commit(SAVE_SHOPDATA,shopData);
      //2. 通过计算得出 cartITems  购物车中的数据
      //为什么不直接将 cartItems中的数据也存储到sessionStorage中呢？
      //因为，直接存储，cartItems将会与 shopData中的数据失去关联
      // cartItems 是一个对象， shopData是另一个对象
      let cartItems = shopData.goods.reduce((pre,good)=>{
        //将 count大于0 的food存储到 cartItems中
        pre.push(...good.foods.filter(food=>food.count));
        return pre;
      },[]);
      //3. 将计算出的cartItems存储到vuex中
      this.$store.commit(SAVE_CARTITEMS,cartItems);

    } else {
      //如果sessionStorage中没有shopData，则说明是第一次进入当前页面，直接发送ajax请求去获取shopData
      this.$store.dispatch("getShopDataAction");
    }

    window.addEventListener("unload", () => {
      //unload事件：页面即将刷新之前执行（刷新操作肯定会执行）
      //将最新的 shopData存储到sessionStorage
      // console.log( this.shopData);
      // sessionStorage.setItem("shopData_key", this.shopData);
      sessionStorage.setItem("shopData_key", JSON.stringify(this.shopData));

    });
  },
  computed: {
    ...mapState({
      initTest: (state) => state.shop.initTest,
      shopData:state=>state.shop.shopData
    }),
  },
  beforeDestroy(){
    //不刷新，直接返回上一级路由 ，此时vuex中的数据没有了
    //所以在销毁这个组价之前（路由切换），需要将最新的数据存储到sessionStorage中
    console.log('beforeDestory');
    sessionStorage.setItem('shopData_key',JSON.stringify(this.shopData));
    //提问：刷新页面也会销毁当前组件，为什么不直接在销毁这里写一个存储到sessionStorage的行为即可？
    //答：因为beforeDestory属于vue的生命周期钩子，而刷新的行为属性浏览器的行为，所以不能用vue的钩子函数替代浏览器的行为，
    //而且，浏览器spa应用的特点是 切换路由不刷新页面，所以也就不会触发 unload事件
    //还有 浏览器的刷新行为是直接将当前组件销毁并新建，一般情况下这个过程很短暂， 上一个组件的beforeDestory钩子还没来得及执行，新的组件已经渲染好了，所以一般情况下，这个钩子函数在刷新的时候是不会被调用的（除非用户的浏览器卡爆了）
  }
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
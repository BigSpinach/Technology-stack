<template>
  <div id="goodContainer">
    <div class="leftContainer">
      <ul class="navlist" ref="leftUl">
        <li
          @click="changeNavIndex(index)"
         :class="{active:navIndex===index}"
         v-for="(good, index) in goods" :key="index">{{ good.name }}</li>
      </ul>
    </div>
    <div class="rightContainer">
      <div class="foods-wrapper">
        <ul ref="rightUl">
          <li           
            class="food-list-hook"
            v-for="(good, index) in goods"
            :key="index"
          >
            <h1 class="title">{{ good.name }}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food, index) in good.foods"
                :key="index"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.image" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CartControl from '../../../components/CartControl/CartControl.vue';
import BScroll from "better-scroll";
// let navlist = document.querySelector('.navlist')
// let scroll = new BScroll(navlist)
import { mapState } from "vuex";

export default {
  data() {
    return {
      tops: [], // 存储“每个”li的高度
      scrollY: 0,
    };
  },
  components:{
    CartControl
  },
  async mounted() {
    // new BScroll('.leftContainer',{
    //   scrollY: true,
    //   // click: true
    // });
    // new BScroll('.rightContainer',{
    //   scrollY: true,
    //   // click: true
    // });
    //测试moock
    //let result = await this.$API.test();
    //console.log(result);//{code: 0, data: "hello vue test!"}
    // let result = await this.$API.mockDatas();
    // console.log(result);
   

    if (this.goods) {
      this._initScroll();
      this._initTop();
    }
  },
  methods: {
    _initScroll() {
      this.scrollLeft = new BScroll(".leftContainer", {
        scrollY: true,
        click:true,//better-sroll 默认进制click事件
      });

      this.scrollRight = new BScroll(".rightContainer", {
        scrollY: true,
        probeType: 2, //1,2,3  
        click:true,
        // '2' 当惯性滑动结束后 重新计算ScrollY的值
      });
      //给scroll实例对象绑定事件
      // this.scrollRight.on("scroll", (position) => {
      //   console.log(position.x, position.y);
      // });
      this.scrollRight.on("scroll", ({ y }) => {
        //为了方便使用，在data中初始化一个 scorllY =0
        this.scrollY = Math.abs(y);
      });

      this.scrollRight.on('scrollEnd', ({ y }) => {
         this.scrollY = Math.abs(y);
      })
    },
    _initTop() {
      //获取li列表  使用ref属性
      //console.dir(this.$refs.rightUl);
      let lis = Array.from(this.$refs.rightUl.children);
      //获得每一个li的高度
      // for(let i=0;i<lis.length;i++){
      //   console.log(lis[i].clientHeight);
      // }
      //存储到tops中  [0,0+762,0+762+314,...]
      // let top = 0;
      // let tops = [];
      // for (let i = 0; i < lis.length; i++) {
      //   let liHeight = lis[i].clientHeight;
      //   tops.push(top);
      //   top += liHeight;
      // }
      // this.tops = tops;
      let top = 0;
      let tops = [0];
      lis.reduce((pre, next) => {
        pre += next.clientHeight;
        tops.push(pre);
        return pre;
      }, top);
      this.tops = tops;
    },
    changeNavIndex(index){
      console.log(index);
      // this.navIndex=index; //navIndex 没有设置setter 回调
      // 要想更改 nvaIndex 其实可以通过 修改 scrollY的值来改变
      this.scrollY = this.tops[index];
      //触发右侧滚动
      // this.scrollRight.scrollTo(x,y,1000)
      this.scrollRight.scrollTo(0,-this.scrollY,1000);

    }
  },
  computed: {
    ...mapState({
      goods: (state) => state.shop.shopData.goods,
      // tops:state=>state.shop.tops
    }),
    navIndex() {
      let index;
      let { tops, scrollY } = this;
      index = tops.findIndex((top, index) => {
        return scrollY >= tops[index] && scrollY < tops[index + 1]; //返回top所在的下标
      });

      //当nvaIndex重新计算时，需要滚动一下左侧列表
      //  this.scrollLeft.scrollToElement(el,1000)
    if(this.scrollLeft && this.index!==index){
      //scrollToElement 滚动到指定的元素
      console.log('触发滚动');
      this.index=index;
      this.scrollLeft.scrollToElement(this.$refs.leftUl.children[index],1000);  
    }
      return index;
    },
  },
  watch: {
    goods() {
      this.$nextTick(() => {
        //页面拿到数据后再执行创建scroll对象
        //切换 同级路由后 就又划不动了
        //为什么？？ watch监视的数据goods没有发生改变
        //怎么解决：在mountend里直接调用，注意第一次最好不要调用
        this._initScroll();
        this._initTop();
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
#goodContainer
  display: flex
  overflow: hidden
  height: calc(100vh - 250px)
  .leftContainer
    width: 80px
    background: #f3f5f7
    /*
    position absolute
    bottom 0
    top 250px
    overflow hidden
    */
    .navlist
      li
        position: relative
        height: 50px
        width: 100%
        text-align: center
        line-height: 50px
        &.active
          background #fff
          color $color
        &::after
          content: ''
          width: 80%
          position: absolute
          left: 10%
          bottom: 0
          // border-bottom 1px solid rgba(7,17,27,.1);
          height: 1px
          background: rgba(7, 17, 27, 0.1)
  .rightContainer
    width: 295px
    // background: green;
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
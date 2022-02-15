<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderGuide :title="address.name ? address.name : '定位中...'">
      <!-- <span slot="left" class="header_search">
              <i class="iconfont icon-sousuo"></i>
            </span> -->
      <template v-slot:left>
        <span class="header_search"> <i class="iconfont icon-sousuo"></i></span>
      </template>

      <span slot="right" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderGuide>
    <!-- <header class="msite_header">
            <span class="header_search">
              <i class="iconfont icon-sousuo"></i>
            </span>
          <span class="header_title">
              <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
            </span>
          <span class="header_login">
              <span class="header_login_text">登录|注册</span>
            </span>
        </header> -->
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(category, index) in newCategory"
            :key="index"
          >
            <div
              class="link_to_food"
              v-for="(categoryItem, index) in category"
              :key="categoryItem.id"
            >
              <div class="food_container">
                <img
                  :src="`https://fuss10.elemecdn.com/${categoryItem.image_url}`"
                />
              </div>
              <span>{{ categoryItem.title }}</span>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </section>
</template>

<script>
import ShopList from "../../components/ShopList/ShopList.vue";

//使用swiper
import Swiper from "swiper";
// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// // import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'
import "swiper/css/swiper.min.css"; //为啥样式要在js中引入？ 因为是swiper规定的

import { mapState } from "vuex";

//使用lodash
import _ from "lodash";

export default {
  data() {
    return {};
  },
  components: { ShopList },

  async mounted() {
    // let result = await getAddress(38.10038,116.36867);
    // console.log(result);
    this.$store.dispatch("getAddressAction");
    /*解决swiper不能滑动的方式2：传递第二个参数回调，当拿到异步数据后再执行这个回调*/
    this.$store.dispatch("getCateGoryAction", () => {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          pagination: {
            el: ".swiper-pagination",
          },
          loop: true,
        });
      });
    });

    // Swiper应该在拿到数据后再使用
    /*
    var mySwiper = new Swiper(".swiper-container", {
      //autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
    });
    */
  },
  computed: {
    // ...mapState(['address'])
    ...mapState({
      address: (state) => state.address,
      category: (state) => state.category,
    }),
    newCategory() {
      return _.chunk(this.category, 8);
    },
  },
  watch: {
    /* 解决swiper不能滑动的方式1：监视swiper所依赖数据的，当它变化时（也就意味着拿到了最新的数据），此时再创建swiper的实例 */
    // newCategory() {
    //   this.$nextTick(() => {
    //     var mySwiper = new Swiper(".swiper-container", {
    //       pagination: {
    //         el: ".swiper-pagination",
    //       },
    //       loop: true,
    //     });
    //   });
    // },
  },
  // props:['']
};
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;

    .header_search {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;

      .icon-sousuo {
        font-size: 25px;
        color: #fff;
      }
    }

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      color: #fff;
      text-align: center;

      .header_title_text {
        font-size: 20px;
        color: #fff;
        display: block;
      }
    }

    .header_login {
      font-size: 14px;
      color: #fff;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      .header_login_text {
        color: #fff;
      }
    }
  }

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      /* 使用深度选择器以解决scoped下的样式不能修改外部css样式的弊端 */
      /* /deep/ 或者原生css的  >>> */
      /* *>>>.swiper-pagination{ */
      /deep/.swiper-pagination {
        >span.swiper-pagination-bullet-active {
          // background: #02a774;
          background: red;
        }
      }
    }
  }
}
</style>

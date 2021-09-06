<template>
  <div class="appContainer">
    <h1>App 组件</h1>
    <button class="btn1">测速按钮1</button>
    <button class="btn2">测试按钮2</button>
    <!-- 实现默认第一个选中，后续点击哪个哪个拥有active样式 -->
    <ul>
      <li @click="navIndex=item" :class="{active:navIndex===item}" v-for="item in 10" :key='item'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      navIndex:1
    }
  }
};
</script>

<style lang="stylus"  >
//引入mixins
@import './common/stylus/mixins.styl'

/*定义混合mixins---btnStyle(w,h,bg) */
btnStyle(w,h,bg)
  width w
  height h
  background bg

/*定义函数 */
add(a,b)
  margin a+b

/* 定义变量 */
// $hong= red
// $lan= blue
// $color=green



        .appContainer 
          h1
            // color $hong
            color $color
          .btn1
          /*使用混合 */
            btnStyle(100px,100px,$hong)
          .btn2
            btnStyle(200px,200px,$lan)  
            /*使用函数 */
            add(10px,20px)
          
          ul
            /*li
              line-height 50px
              font-size 28px
            li.active
              color red
            */
            li
              line-height 50px
              font-size 28px
              &.active
                color $color
          /*
          .btn1
            width 100px
            height 100px
            background-color $hong
          .btn2
            width 200px
            height 200px
            background-color $lan
          */
          /*定义混合mixins---btnStyle(w,h,bg) */
          
</style>

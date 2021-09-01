<template>
  <div class="container clearfix">
    <div class="l nav-list" >
      <div>
      <!-- 声明式使用路由 -->
        <!-- <button>About</button> -->
        <router-link to="/about">About</router-link>
      </div>
      <div>
        <!-- 声明式使用路由 -->
        <!-- <button>Home</button> -->
        <router-link to="/home">Home</router-link>
      </div>
    </div>

    <div class="r main-content">
      <router-view></router-view>      
      <!-- 
        <About></About>
        <Home></Home>
      -->
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {};
</script>


<style  scoped>
.container {
  width: 400px;
  border: 1px solid slategrey;
  border-radius: 5px;
  /* height: 800px; */
}
.nav-list{
  width: 100px;
  background-color: steelblue;
}
.main-content{
  width: 280px;
  background-color:salmon ;
  height: 100%;
}
</style>

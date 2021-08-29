<template>
  <div>
    <div>新闻首页</div>
    <nav>
      <div class="l">
        <router-link to="/home/shouye">首页<span>|</span></router-link>
      </div>

      <div class="l">
        <router-link to="/home/guonei">国内<span>|</span></router-link>
      </div>

      <div class="l">
        <router-link to="/home/guoji">国际<span>|</span></router-link>
      </div>
    </nav>
    <br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {};
</script>


<style  scoped>
</style>

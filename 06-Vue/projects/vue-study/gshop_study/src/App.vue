<template>
  <div class="appContainer">
    <router-view></router-view>
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';

export default {
  name: "App",
  components:{FooterGuide}
};
</script>

<style lang="stylus"  >

</style>

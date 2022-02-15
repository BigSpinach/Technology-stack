<template>
  <div class="appContainer">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
// import { autoLogin } from './api';
import {SAVE_USER} from './vuex/mutations-type';
import FooterGuide from './components/FooterGuide/FooterGuide.vue';


export default {
  name: "App",
  components:{FooterGuide},
  async mounted(){
    // let result =await autoLogin();
    let result =await this.$API.autoLogin();

    //将解析后的token存入vuex中
    //console.log(result.data);
    this.$store.commit(SAVE_USER,result.data);
  }
};
</script>

<style lang="stylus"  >

</style>

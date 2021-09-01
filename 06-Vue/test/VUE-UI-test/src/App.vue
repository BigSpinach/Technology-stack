<template>
  <div class="container clearfix">
    <mt-button class="btn" @click="hint" type="danger">点我啊</mt-button>
  </div>
</template>

<script>
// import { Button } from 'mint-ui';
import { Toast } from "mint-ui";
export default {
  name: "App",
  components: {
    Toast,
  },
  methods: {
    hint() {
      // alert('OK');
      // Toast('提示提示');
      // Toast({
      //   message: "提示",
      //   position: "bottom",
      //   duration: 2000,
      // });
      let instance = Toast({
        message: "提示",
        position: "bottom",
        duration: 2000,
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
  },
};
</script>


<style  scoped>
.container {
  width: 400px;
  border: 1px solid slategrey;
  border-radius: 5px;
  height: 600px;
}
.nav-list {
  width: 100px;
  background-color: steelblue;
}
.main-content {
  width: 280px;
  background-color: salmon;
  height: 100%;
}
.btn {
  width: 400px;
  margin: 50px 0;
}
</style>

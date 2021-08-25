<template>
  <div class="son"></div>
</template>


<script>
export default {
  mounted(){
    let a =100;
    this.$emit('my-event',a,2,3);
  }
};
</script>

<style  scoped>
.son {
  background-color: aquamarine;
  width: 100px;
  height: 100px;
  margin: 50px auto;
}
</style>
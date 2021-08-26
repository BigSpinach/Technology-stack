<template>
  <div class="son">
    <slot name="=name1"></slot>
    <slot name="=name2">默认值</slot>
    <!--默认插槽-- 没有名字的插槽只能写一个 -->
    <slot ></slot>
    

  </div>
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
<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchValue"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template>

<script>


export default {
data(){
  return {
    searchValue:''
  }
},
  methods:{
    search(){
      // console.log(this.searchValue);
      let searchValue = this.searchValue.trim();
      if(searchValue){
        this.$eventBus.$emit('search',this.searchValue);
        this.searchValue='';
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
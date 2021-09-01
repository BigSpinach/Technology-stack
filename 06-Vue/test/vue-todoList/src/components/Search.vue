<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchValue"
      />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    //点击seach按钮，执行搜索函数，并传递搜索的值
    search() {
      const searchValue = this.searchValue.trim();
      if (searchValue) {
        this.$store.dispatch("search", searchValue);
        this.searchValue=''
      }

      // const searchValue = this.searchValue.trim();
      // if (searchValue) {
      //   this.$eventBus.$emit("search", searchValue);
      //   this.searchValue='';
      // }
    },
  },
};
</script>


<style   scoped>
</style>
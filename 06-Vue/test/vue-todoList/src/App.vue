<template>
  <div class="container">
    <Search></Search>
    <Main></Main>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Main from "./components/Main.vue";

// import { defineComponent } from "@vue/composition-api";

export default {
  components: { Search, Main },
};
</script>


<style   scoped>
</style>
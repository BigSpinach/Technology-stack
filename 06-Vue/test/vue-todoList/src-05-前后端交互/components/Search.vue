  <template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchValue"
      />
      <button  @click="search">搜索</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchValue: "",
    };
  },
  mounted() {},
  methods: {
    search() {
      const searchValue = this.searchValue.trim();
      if (searchValue) {
        this.$eventBus.$emit("search", searchValue);
      }
    },
  },
};
</script>



<style  scoped>
</style>


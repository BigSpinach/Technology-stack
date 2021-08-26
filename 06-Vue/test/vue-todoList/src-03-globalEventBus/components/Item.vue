<template >
  <li>
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteItem">删除</button>
  </li>
</template>




<script>
export default {
  data() {
    return {
      //isChecked:false 计算属性：由 todos 中每一项的 complate的值决定
    };
  },
  props: ["todo", "index", "removeTodo", "undateTodoComplate"],
  methods: {
    deleteItem() {
      this.removeTodo(this.index);
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.todo.complate;
      },
      set(val) {
        this.undateTodoComplate(this.todo, val);
      },
    },
  },
};
</script>


<style  scoped>
/* .item {
  background-color: #666;
  border: 1px solid yellow;
} */
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>


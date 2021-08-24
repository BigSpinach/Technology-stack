  <template>
  <li @mouseenter="handsEnter(true)" @mouseleave="handsEnter(false)">
    <label>
      <!-- <input type="checkbox" v-model="todo.complate"/> -->
      <input type="checkbox" v-model="isChecked" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="removeItem">
      删除
    </button>
  </li>
</template>




<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    todo: Object,
    index: Number,
    deleteItem: Function,
    upDateTodos: Function,
  },
  methods: {
    handsEnter(isShow) {
      this.isShow = isShow;
    },
    removeItem() {
      this.deleteItem(this.index);
    },
  },
  computed: {
    isChecked: {
      get() {
        //获取当前项的 todo.complate的值
        //console.log(this.todo.complate);
        return this.todo.complate;
      },
      set(val) {
        //修改 当前项 todo.complate的值
        //更新todos的数据
        this.upDateTodos(this.todo, val);
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


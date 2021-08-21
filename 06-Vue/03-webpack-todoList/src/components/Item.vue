<template>
  <li @mouseenter="handsEnter(true)" @mouseleave="handsEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complate" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" style="{background:bgColor}"
    @click="removeItem"    >删除</button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "white",
      isShow: false,
    };
  },
  // props: ["todo",'deleteItem'],
  props:{
    "todo":Object,
    "deleteItem":Function
  },
  methods: {
    handsEnter(isEnter) {
      if (isEnter) {
        //移入 显示
        this.bgColor="#aaaaaa";
        this.isShow=true;
        // console.log('显示');
      } else {
        //移出  隐藏
        // console.log('隐藏');
        this.bgColor="#ffffff";
        this.isShow=false;
      }
    },
    removeItem(){
      if(confirm('确定要删除？')){
        // console.log('delete');
        this.deleteItem(this.index);
      }
    }
  },
};
</script>

<style scoped>
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
  <template>
  <!-- 
    <div class="item">Item page</div>
  -->

  <!-- 鼠标移入item会显示删除按钮 -->

  <li @mouseenter="handsEnter(true)" @mouseleave="handsEnter(false)">
    <label>
      <!-- <input type="checkbox" v-model="plan.complate" /> -->
      <!-- 不能违背基本原则：子组件不能修改父组件的数据  plan.complate会修改父组件的数据 -->
      <!-- <input type="checkbox" v-model="isChecked"  @click="fn(isChecked)"/> -->
      <input type="checkbox" v-model="isChecked" />
      <span>{{ plan.title }}</span>
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
      // isChecked:false 是一个计算属性的值
    };
  },
  props: {
    plan: Object,
    deletePlan: Function,
    index: Number,
    updataPlan:Function
  },
  methods: {
    handsEnter(isEnter) {
      if (isEnter) {
        //显示
        // console.log('显示');
        this.isShow = true;
      } else {
        //隐藏
        // console.log('隐藏');
        this.isShow = false;
      }
    },

    removeItem(index) {
      // console.log('removeItem');
      if (confirm("确定要做出这样惨无人道的操作吗？")) {
        //通知 父组件修改数据
        // this.deletePlan(index);
        this.deletePlan(this.inidex);
      }
    },
    // fn(val){
    //   console.log(val);
    //   this.updataPlan(this.plan,val)
    // }
  
  },
  computed: {
    isChecked: {
      get() {
        // 由plans中的对应项的complate决定

        return this.plan.complate;
      },
      set(val) {
        // updatePlan()
        this.updataPlan(this.plan,val)
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


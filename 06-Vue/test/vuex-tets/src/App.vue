<template>
  <div>
    <!-- <p>{{$store.state.xxx}}</p> -->
    <!-- <p>
      点击了<b>{{ $store.state.count }}</b
      >次，次数是<b>{{ $store.getters.evenOrOdd }}</b>
    </p> -->
    <!-- 优化 -->
    <p>
      点击了<b>{{ count }}</b
      >次，次数是<b>{{ evenOrOdd }}</b>
    </p>

    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseIfOdd">incrent if odd【偶数时增加】</button>
    <button @click="increaseIfAsync">increment async【异步增加】</button>
  </div>
</template>

<script>
//优化依赖于vuex提供的方法
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  //优化原理
  /*
  computed: {
    count(){
      return this.$store.state.count;
    },
    evenOrOdd(){
      return this.$store.getters.evenOrOdd;
    }
  },
  */
  computed: {
    ...mapState(["count"]), //'count'(){ return this.$store.state[count]};
    /*
      count(){
        return this.$store.state.count;
      },
    */

    ...mapGetters(["evenOrOdd"]),
  },
  mounted() {
    //console.log(this.$store);
    /*
      commit: ƒ boundCommit(type, payload, options)
      dispatch: ƒ boundDispatch(type, payload)
      getters: {}
      registerModule: (path, module, options) => {…}
      replaceState: ƒ ()
      strict: false
      unregisterModule: (path) => {…}
      _actionSubscribers: [{…}]
      _actions: {}
      _committing: false
      _devtoolHook: {_buffer: Array(0), Vue: ƒ, _replayBuffer: ƒ, on: ƒ, once: ƒ, …}
      _makeLocalGettersCache: {}
      _modules: ModuleCollection {root: Module}
      _modulesNamespaceMap: {}
      _mutations: {}
      _subscribers: [ƒ]
      _vm: Vue {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
      _watcherVM: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
      _wrappedGetters: {}
      state: (...)
      [[Prototype]]: Object
    */
  },
  data() {
    return {
      // count: 1,
    };
  },

  /*
  methods: {
    increase() {
      //增加1
      // this.count++;
      // 通知 store中的actions 的对应函数调用
      // console.log(this.$store);
      //  this.$store.dispatch('increase',123);
      // this.$store.dispatch("increase");
      // actions 中 increase  方法只是未做其他事，直接调用 的 commit方法，所以可以直接commit
      this.$store.commit("INCREASE");
    },
    decrease() {
      //减少1
      // this.count--;
      this.$store.commit("DECREASE");
    },
    increaseIfOdd() {
      //偶数时增加
      // if (this.count % 2 === 0) {
      //   this.count++;
      // }
      this.$store.dispatch("increaseIfOdd");
    },
    increaseIfAsync() {
      //异步增加1
      // setTimeout(() => {
      //   this.count++;
      // }, 1000);
      setTimeout(() => {
        this.$store.dispatch("increaseIfAsync");
      }, 1000);
    },
  },
  */
  methods: {
    //  increase() {this.$store.commit("INCREASE");}
    //  ...mapMutations(['increase','decrease']),
    ...mapMutations({
      increase:'INCREASE',
      decrease:'DECREASE'
    }),
     ...mapActions(['increase','decrease' ,"increaseIfOdd", "increaseIfAsync"]),
    // ...mapActions({
    //   increase: "INCREASE",
    //   decrease: "DECREASE",
    //   increaseIfOdd:'increaseIfOdd',
    //   increaseIfAsync:'increaseIfAsync',
    // }),
  },
};
</script>


<style  scoped>
b {
  color: red;
}
</style>

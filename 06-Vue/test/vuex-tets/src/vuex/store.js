import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
// console.log(Vuex);
/*
  Store: ƒ Store(options)  //vuex核心对象的构造函数
  createLogger: ƒ createLogger(ref)
  createNamespacedHelpers: ƒ (namespace)
  install: ƒ install(_Vue)
  mapActions: ƒ (namespace, map)  // 用于映射actions 中的
  mapGetters: ƒ (namespace, map)  //
  mapMutations: ƒ (namespace, map)  //
  mapState: ƒ (namespace, map)  //
  version: "3.6.2"
  [[Prototype]]: Object
*/

//const store = new Vuex.Store();
//console.log(store);
/*
  commit: ƒ boundCommit(type, payload, options)
  dispatch: ƒ boundDispatch(type, payload)
  getters: {}
  registerModule: (e,t,o)=> {…}
  replaceState: e=>{r.initialState=w(e),t(e)}
  strict: false
  unregisterModule: e=> {…}
  _actionSubscribers: [{…}]
  _actions: {}
  _committing: false
  _devtoolHook: {_buffer: Array(3), Vue: ƒ, _replayBuffer: ƒ, on: ƒ, once: ƒ, …}
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


import state from './states';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default new Vuex.Store({
  state,
  mutations,
  actions ,
  getters ,
})
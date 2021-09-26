import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

//路由模块化
import shop from './modules/shop'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules:{
    shop
  }
})

export default store;
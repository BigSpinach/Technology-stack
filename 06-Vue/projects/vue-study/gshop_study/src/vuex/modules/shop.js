import {
  SAVE_SHOPDATA,
  ADD_FOOD_COUNT,
  DEL_FOOD_COUNT
} from '../mutations-type';
import {
  mockDatas
} from '../../api/index';
import Vue from 'vue';

const state = {
  initTest: '路由模块化初始数据',
  shopData: {}, 
}

const actions = {
  async getShopDataAction({  commit}) {
    let result = await mockDatas();
    result.code===0 &&  commit(SAVE_SHOPDATA,result.data);
    // if (result.code === 0) {
    //   commit(SAVE_SHOPDATA,result.data.goods);
    // }
  },
  changeFoodCountAction({commit},{food,isAdd}){
    if(isAdd){
      commit(ADD_FOOD_COUNT,{food});
    }else{
      commit(DEL_FOOD_COUNT,{food});
    }
  }
}

const mutations = {
  [SAVE_SHOPDATA](state, shopData) {
    state.shopData = shopData;
  },
  [ADD_FOOD_COUNT](state,{food}){
    //响应式属性
    if(food.count>0){
      food.count++;
    }else{
      Vue.set(food,'count',1);      
    }
  },
  [DEL_FOOD_COUNT](state,{food}){
    if(food.count>0){
      food.count--;
    }
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}

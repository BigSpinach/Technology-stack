import {
  SAVE_SHOPDATA,
  ADD_FOOD_COUNT,
  DEL_FOOD_COUNT,
  EMPTY_CART_ITEMS,
  SAVE_CARTITEMS
} from '../mutations-type';
import {
  mockDatas
} from '../../api/index';
import Vue from 'vue';
import {
  MessageBox
} from 'mint-ui';

const state = {
  initTest: '路由模块化初始数据',
  shopData: {},//用于存储商家的所有信息
  cartItems: [], //用于存储用户增加到购物车的good
  // totalCount:0, //计算得出
  // totalPrice:0  //计算得出
}

const actions = {
  async getShopDataAction({    commit  }) {
    let result = await mockDatas();
    result.code === 0 && commit(SAVE_SHOPDATA, result.data);
    // if (result.code === 0) {
    //   commit(SAVE_SHOPDATA,result.data.goods);
    // }
  },
  changeFoodCountAction({
    commit
  }, {
    food,
    isAdd
  }) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, {
        food
      });
    } else {
      commit(DEL_FOOD_COUNT, {
        food
      });
    }
  },
  emptyCartItemsAction({
    commit
  }) {
    // commit(EMPTY_CART_ITEMS);
    MessageBox.confirm('确定情况购物车吗?').
    then(
      actionAgree => commit(EMPTY_CART_ITEMS),
      actionReject => console.log('取消清空购物车')
    )
  },
}

const mutations = {
  [SAVE_SHOPDATA](state, shopData) {
    state.shopData = shopData;
  },
  [ADD_FOOD_COUNT](state, {
    food
  }) {
    //响应式属性
    if (food.count > 0) {
      food.count++;
    } else {
      Vue.set(food, 'count', 1);
      //用户一点击增加就将这个food添加至 cartItems数组中,不用关心count的值
      state.cartItems.push(food);
    }
  },
  [DEL_FOOD_COUNT](state, {
    food
  }) {
    if (food.count > 0) {
      food.count--;
      //什么时候把这个food从 cartItems中删除掉？  count<=0的时候
      if (food.count === 0) {
        //删除的是 cartItems中的某一项，
        //state.cartItems.splice(state.cartItems.indexOf(food), 1);

        //如果说不对cartItems数组中的元素进行删除操作，这样比较解约性能
        //因为数组的数据结构 增，查，改，方便， 删除操作需要修改后续索引，所以最好不要操作数组的删除操作   
        //所以在这里直接遍历，为0就让它为0 吧 ，也算是记录了一下用户的操作记录  
      }
    }
  },
  //清空购物车列表
  [EMPTY_CART_ITEMS](state) {
    state.cartItems.forEach(item=>item.count=0)
    state.cartItems=[];
    // MessageBox.confirm('确定情况购物车吗?').then(actionAgree => {
    //   // console.log(action);
    //   state.cartItems = [];
    // });
  },

  //存储计算得出的购物车列表
  [SAVE_CARTITEMS](state,cartItems){
    state.cartItems = cartItems;
  }
}

const getters = {
  //可以通过遍历 state.shop.shopData.foods 计算出goodList
  /* 
  //这个计算量依赖的goods数据量很大，每次增加food都会重新遍历计算goods，耗性能
  //使用另一种思路：当用户点击了就将增加的项 添加至 cartItems 中
  cartItems(state){
    // return [];
    return state.shopData.goods.reduce((pre,good)=>{
      //遍历出good.count>0 的项      
      let item = good.foods.filter(food=> food.count>0);
      // console.log(...item);
      // let result = pre.concat(item);
      // return result
      pre.push(...item)
      return pre
    },[])
  }
  */

  //通过计算的出总数量和总价格
  totalCount(state) {
    return state.cartItems.reduce((pre, food) => {
      return pre += food.count;
    }, 0)
  },
  totalPrice() {
    return state.cartItems.reduce((pre, food) => {
      return pre += food.count * food.price;
    }, 0)
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}

import {
  GET_ADDRESS,
  GET_CATEGORY,
  SAVE_SHOPLIST,
  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT
} from './mutations-type';

export default {
  [GET_ADDRESS](state, address) {
    state.address = address;
  },
  [GET_CATEGORY](state, category) {
    state.category = category;
  },
  [SAVE_SHOPLIST](state, shoplist) {
    state.shoplist = shoplist;

  },
  [SAVE_USER](state, user) {
    state.user = user;

  },
  [SAVE_TOKEN](state, token) {
    state.token = token;
  },
  [LOGOUT](state) {
    state.user={};
    state.token='';
    //删除本地token
    localStorage.removeItem('token_key');
  }
}

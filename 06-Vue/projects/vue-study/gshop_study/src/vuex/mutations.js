import {
  GET_ADDRESS,
  GET_CATEGORY,
  SAVE_SHOPLIST
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
    // console.log(shoplist);
  }
}

import {
  GET_ADDRESS,
  GET_CATEGORY,
  SAVE_SHOPLIST,
  SAVE_USER,
  SAVE_TOKEN
} from './mutations-type';

import {
  getAddress,
  getCateGory,
  getShopList
} from '../api/index.js';

export default {
  /*获取用户地址address */
  async getAddressAction({
    commit
  }) {
    //发送ajax请求
    let result = await getAddress(34.29038, 109.01867);
    // console.log(result);//code: 0, data: {…}}
    //判断是否拿到成功的数据
    // if(result.code===0){//成功
    //   commit(GET_ADDRESS,result.data);
    // }
    // result.code===0 && commit(GET_ADDRESS,result.data);
    !!(result.code === 0) && commit(GET_ADDRESS, result.data);
    //!(表达式)  对表达式做隐式装箱操作，转换成一个Boolean类型
    //!!  表示取反
  },

  /*获取美食列表 category */
  async getCateGoryAction({
    commit
  }, fn) {
    let result = await getCateGory();
    !!(result.code === 0) && commit(GET_CATEGORY, result.data);
    //拿到数据后再执行fn这个回调
    typeof fn === 'function' && fn(); //防止没有传递第二个参数，或者传递的不是函数，执行报错
  },

  /*获取商家列表 */
  async getShopListAction({
    commit
  }) {
    let result = await getShopList(40.10038, 116.36867);
    !!(result.code === 0) && commit(SAVE_SHOPLIST, result.data);
  },


  /*获取登陆的用户信息 */
  async getUserInfoAction({commit }, user) {
    commit(SAVE_TOKEN, user.token);
    //将token存储到本地localStorage
    localStorage.setItem('token_key',user.token);
    delete user.token;
    commit(SAVE_USER, user);
  },

}

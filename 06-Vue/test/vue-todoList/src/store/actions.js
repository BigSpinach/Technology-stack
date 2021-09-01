import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_ERROR
} from './mutations-types';

import axios from 'axios';
export default {

  //search搜索异步请求的actions  发送ajax请求
  async search({ commit}, searchValue) {
    //searchValue='a' 设置默认值解决 第一次不传参 
    //axios.get("https://api.github.com/search/users?q="
    //报错422
    //axios.get("https://api.github.com/search/users?q=a"
  // async search({ commit}, searchValue='bigspinach') {
    //修改状态数据，变成 请求中的页面
    commit(REQUESTING);

    try {
      //发送ajax请求，得到users数据
      const response = await axios.get("https://api.github.com/search/users", {
        params: {
          q: searchValue,
        }
      });

      //请求成功
      // console.log(response.data.items);
      const users = response.data.items.map(item => ({
        url: item.html_url,
        avatar_url: item.avatar_url,
        username: item.login,
      }))
     

      // commit(REQ_SUCCESS, users);
      commit(REQ_SUCCESS, {users});

    } catch (e) {
      // 请求失败
      commit(REQ_ERROR, e.message)
    }



  }
}
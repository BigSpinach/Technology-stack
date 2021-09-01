import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_ERROR
} from './mutations-types';

export default {
  //请求中
  [REQUESTING](state) {
    state.firstView = false;
    state.loadingView = true;
  },

  //请求成功，
  // [REQ_SUCCESS]( state,users ){
    
  [REQ_SUCCESS]( state,{users} ){//对应 commit(REQ_SUCCESS,{users})

    state.loadingView=false;
    state.users = users
  },



  //请求失败
  [REQ_ERROR](state,err ){
    state.loadingView=false;
    state.errorMsg=err.message
  }
}
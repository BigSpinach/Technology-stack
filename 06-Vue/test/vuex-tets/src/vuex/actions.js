export default {
  // increase(...args){
  //   console.log(args);//[{…}, 123]
  // }
  increase(store){
    // console.log(store);
    // store.commit('INCREASE',234);
    //可以 传参
    //对应的INCREASE 接收时 需要使用 ...args ，第二个参数就是 传递的其他参数
    store.commit('INCREASE');
  },
  decrease(store){
    store.commit('DECREASE');
  },
  // increaseIfOdd(store){
  increaseIfOdd({state,commit}){
    if(state.count%2===0){
      commit('INCREASE');
    }
  },
  increaseIfAsync({commit}){
    commit('INCREASE');
  }
}
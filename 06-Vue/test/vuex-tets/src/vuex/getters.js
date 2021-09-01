export default {
  // evenOrOdd(...args){
  //   // console.log(state);
  //   console.log(args);
  //   // return store.state.count;
  //   return 250
  // }
  evenOrOdd(state){
    // console.log(state);//{__ob__: Observer}
    // console.log(state.count);
    return state.count%2===0?"偶数":"奇数"
  }
  
}
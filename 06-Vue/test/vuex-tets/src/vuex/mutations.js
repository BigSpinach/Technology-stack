export default {
  INCREASE(state){
    console.log(1);
    state.count++;
  },
  DECREASE(state){
    state.count--;
  }
}
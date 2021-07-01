/*
  高阶函数
  + 一个函数的参数是一个函数（回调）
  + 一个函数中返回一个函数
*/

Function.prototype.before = function (beforeFn) {
  return (...args) => {
    beforeFn();
    //this => 谁调用before方法 this就是谁
    this(...args);
  };
}


const say = () => {
  console.log('say');
}

const newSay = say.before(
  //在执行say方法前执行before的函数
  () => {
    console.log('before say');
  }
)

newSay('aaa');
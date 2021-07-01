/*
高阶函数？
  1.函数参数是一个函数（回调）
  2.函数返回值是一个函数
*/

//aop
//在执行一个方法前先执行其他的操作
Function.prototype.aop = function(fn){
  return (...args)=>{
    fn();
    this(...args);
  }
}

const sayHello = ()=>{
  console.log('hello');
}

//在执行sayHello前先执行aop函数
//sayHello.aop(callback)(123);
//aop干了啥呢？ 让callback(), 让调用aop的函数执行并传参
sayHello.aop(()=>{console.log('aop');})(123);


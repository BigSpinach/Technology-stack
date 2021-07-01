/*
  1.每次new Promise 需要传递一个executor函数，executor函数立即执行
  2.executor 接收两个参数 resolve 和reject
  3.默认promise有三个状态 pending resolved rejected
  4.状态只能从pending转向另一个状态，一旦改变不能再变
*/
// new Promise((resolve, reject) => {
//   resolve(value);
//   reject(reason);
// });

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    //如果是异步操作，需要将resolve或reject的执行代码先存储起来(在哪存？什么情况下存？pending状态一直没变的时候，在then方法中存)，当状态改变的时候依次全部执行
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = []; 

    let resolve = (value) => {
      if(this.status === PENDING){
        this.value = value;
        this.status=FULFILLED;
        this.onResolvedCallbacks.forEach(item=>{item();});
      }
    }

    let reject = (reason) => {
      if(this.status === PENDING){
        this.reason = reason;
        this.status=REJECTED;
        this.onRejectedCallbacks.forEach(item=>{item();});
      }
    }

    try{
      executor(resolve, reject)
    }catch(e){//一旦报错，直接走reject，并把e传递进去
      reject(e);
    }
  }

  then(onResolve,onReject){
    //判断状态，根据状态执行不同的回调
    if(this.status===FULFILLED){
      //成功
      onResolve(this.value);
    }
    if(this.status === REJECTED){
      //失败
      onReject(this.reason)
    }
    if(this.status === PENDING){
      //一直是pending ，说明走的是异步代码，
      this.onRejectedCallbacks.push(()=>{
        onReject(this.reason);
      })
      this.onResolvedCallbacks.push(()=>{
        onResolve(this.value);
      })
    }
  }
}


//test
let p =new Promise((resolve,reject)=>{
  //resolve(123);
  //reject(456);
  throw new Error('wrong');
});

p.then((value)=>{
  console.log(value);
},(reason)=>{
  console.log(reason);
});
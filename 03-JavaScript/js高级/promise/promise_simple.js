/*
  1. 每次new一个 Promise 都要传一个执行器（executor），执行器立即执行
  2. 执行器函数中有两个参数 resolve reject
  3. 默认promise有三个状态 pending fulfilled rejected
  4. 状态只能有 pending变成其他两个状态，一旦改变，不能再变
*/
const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    //立即执行executor()
    //executor(resolve, reject);
    //处理一下try catch
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    //对status 的判断，从而决定走成功还是失败的回调
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        // todo ....
        onFulfilled(this.value);
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}



//test
let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('我有钱');
    // throw new Error('失败'); // 如果抛出异常也会执行失败
  }, 1000)
});
// 没有完全解决回调问题
p.then(data => { // 成功的毁掉
  console.log('success', data);
}, err => {
  console.log('error', err) // 失败的回调
})

p.then(data => { // 成功的毁掉
  console.log('success', data);
}, err => {
  console.log('error', err) // 失败的回调
})

p.then(data => { // 成功的回调
  console.log('success', data);
}, err => {
  console.log('error', err) // 失败的回调
})
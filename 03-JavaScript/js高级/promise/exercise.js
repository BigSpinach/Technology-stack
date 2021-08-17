//手写promise

/*
  1. 每次new Promise 需要接受一个executor 函数
  2. executor执行器函数立即执行
  3. executor接收两个参数 resolve，reject
  4. 每个 promise实例有三种状态 pending fulfilled rejected
  5. 状态只能从pending转为其中的一个，一旦改变不能再变
*/
const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        //发布
        onResolvedCallbacks.forEach(element => {
          element();
        });
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(element => {
          element();
        });
      }
    }

    //如果执行器函数出现异常，直接走失败
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      //异步操作，订阅 异步操作
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
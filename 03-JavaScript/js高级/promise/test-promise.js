const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2===x) {
    return reject(new TypeError(`Chaining cycle detected for promise #<Promise>`));
  }

  //判断x是不是一个promise
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    //暂定x为promise
    //是promise就有 then方法
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, r => {
          if (called) return;
          called = true
          //r是不是一个promise？
          resolvePromise(promise2, r, resolve, reject);
        }, y => {
          if (called) return;
          called = true
          reject(y);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true
      reject(e);
    }
  } else {
    resolve(x);
  }
};



class Promise {
 
  constructor(executor) {
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        if (resolve instanceof Promise) {
          return value.then(resolve, reject);
        }
        this.value = value;
        this.status = FULFILLED;
        this.onResolvedCallbacks.forEach(f => f());
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(f => f());
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    };
    let promise2 = new Promise((resolve, reject) => {
      //根据promise的状态判断执行的是成功还是失败的回调

      if (this.status === FULFILLED) {
        //onFulfilled(this.value) 拿到then方法执行的返回结果，根据这个返回结果判断then中的promise2是成功还是失败
        //onFulfilled(this.value)有可能报错
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        })
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        })
      }

      if (this.status === PENDING) {
        //如果是异步
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          })
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          })
        });
      }
    });
    return promise2;
  }

  
  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  catch (errCallback) {
    return this.then(null, errCallback);
  }
}

Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject
  })
  return dfd;
}
module.exports = Promise;
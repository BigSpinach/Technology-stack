const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';
const resolvePromise = (promise2, x, resolve, reject) => {
  //根据x的值进行判断 promise是成功还是失败
  if (promise2 === x) {
    // return reject(new TypeError('自己等自己是不被允许的'));
    return reject(new TypeError(`Chaining cycle detected for promise #<Promise>`));
  }


  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called;
    try {
      let then = x.then; // 取then的时候 可能会发生异常 getter
      if (typeof then === 'function') { // 如果是函数
        then.call(x, y => { // 就让此函数调用即可
          if (called) return
          called = true // y有可能还是个promise
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) return;
          called = true
          reject(r)
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true
      reject(e);
    }
  } else {
    // 不是promise
    resolve(x); // 直接将结果跑出去即可
  }
};

class Promise {
  constructor(executor) { // executor 立即执行的
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的原因
    this.status = PENDING;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.status === PENDING) {
        //如果一个promise resolve了一个 promise，我们需要拿到resolve里的promise的返回结果
        if (resolve instanceof Promise) {
          return value.then(resolve, reject);
        }
        this.value = value;
        this.status = FULFILLED;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };
    let reject = reason => { // 失败
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    try {
      executor(resolve, reject); // 出错了 直接退出即可
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
      //根据promise的状态，执行不同的回调，拿到对应的结果
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      //

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        })
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
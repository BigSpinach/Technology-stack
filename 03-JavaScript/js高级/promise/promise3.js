const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';
const resolvePromise = (promise, x, resolve, reject) => {
  //判断x到底是什么
  //1.x和当前的promise是同一个东西，直接报错
  // if(x===promise){
  //   reject(throw TypeError('不能自己等待自己'));
  //}

  if (promise === x) { // 不能自己等待自己完成
    return reject(new TypeError(`Chaining cycle detected for promise #<Promise>`));
  };
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') { //暂定x是promise
    //在x上取 x.then 
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          //成功
          if (called) return
          called = true;
          //防止多次调用，处理y。then。then
          resolvePromise(promise, y, resolve, reject);
        }, r => {
          if (called) return
          called = true;
          reject(r);
        })
      } else { //[12,3,4]
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e)
    }

  } else {
    //是普通值
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
        this.value = this.value;
        this.status = FULFILLED;
        this.onResolvedCallbacks.forEach(f => f());
      }
    };

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(f => f());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) { // 两个回调可能是可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    };
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            //resolve(x);//x到底是啥 普通值?[],{},new Promise?
            //处理x的函数
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });

      }

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
              reject(e);
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
        });
      }
    });

    return promise2;

  }
}

// Promise.deferred = function () {
//   let dfd = {};
//   dfd.promise = new Promise((resolve, reject) => {
//     dfd.resolve = resolve;
//     dfd.reject = reject;
//   })
//   return dfd;
// }

Promise.deferred = function(){
  let dfd = {};
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject
  })
  return dfd;
}
module.exports = Promise;


// let p = new Promise((resolve, reject) => {
//   // resolve(123)
//   //reject('error');
//   //throw new Error('报错');
//   setTimeout(() => {
//     resolve(100);
//   });
// });
// p.then((data) => {
//   return 123;
//   //  return [];
//   //  return {};
//   //  return new Promise();

// }, (err) => {
//   console.log(err);
// })
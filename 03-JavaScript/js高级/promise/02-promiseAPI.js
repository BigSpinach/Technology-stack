/**
 * 1. Promise构造函数: new Promise (executor) {}
					executor函数: 是同步执行的，(resolve, reject) => {}
					resolve函数: 调用resolve将Promise实例内部状态改为成功(fulfilled)。
					reject函数: 调用reject将Promise实例内部状态改为失败(rejected)。
					说明: excutor函数会在Promise内部立即同步调用,异步代码放在excutor函数中。

    2. Promise.prototype.then方法: Promise实例.then(onFulfilled,onRejected)
					onFulfilled: 成功的回调函数 (value) => {}
					onRejected: 失败的回调函数 (reason) => {}
					特别注意(难点)：then方法会返回一个新的Promise实例对象

    3. Promise.prototype.catch方法: Promise实例.catch(onRejected)
          onRejected: 失败的回调函数 (reason) => {}
          说明: catch方法是then方法的语法糖, 相当于: then(undefined, onRejected)
 */
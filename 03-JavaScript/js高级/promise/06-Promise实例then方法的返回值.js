/**
 * 
 *  	Promise实例.then()返回的是一个【新的Promise实例】，它的值和状态由什么决定?
					1.简单表达: 由then()所指定的回调函数执行的结果决定
					2.详细表达:
							(1)如果then所指定的回调返回的是非Promise值a:
											那么【新Promise实例】状态为：成功(fulfilled), 成功的value为a
							(2)如果then所指定的回调返回的是一个Promise实例p:
											那么【新Promise实例】的状态、值，都与p一致
							(3)如果then所指定的回调抛出异常:
											那么【新Promise实例】状态为rejected, reason为抛出的那个异常
 */


const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('a')
  }, 1000)
})

p.then(
  value => {
    console.log('成功了1', value);
    return Promise.reject('a')
  },
  reason => {
    console.log('失败了1', reason);
  }
).then(
  value => {
    console.log('成功了2', value);
    return true
  },
  reason => {
    console.log('失败了2', reason);
    return 100
  }
).then(
  value => {
    console.log('成功了3', value);
    throw 900
  },
  reason => {
    console.log('失败了3', reason);
    return false
  }
).then(
  value => {
    console.log('成功了4', value);
    return -100
  },
  reason => {
    console.log('失败了4', reason);
  }
)
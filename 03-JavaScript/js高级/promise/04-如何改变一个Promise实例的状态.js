/**
 * 如何改变一个Promise实例的状态?
						(1)执行resolve(value): 如果当前是pending就会变为fulfilled
						(2)执行reject(reason): 如果当前是pending就会变为rejected
						(3)执行器函数(executor)抛出异常: 如果当前是pending就会变为rejected
 */

const p = new Promise((resolve, reject) => {
  console.log(a); //引擎抛异常
  // throw 900 //编码抛异常
})
p.then(
  value => {
    console.log('成功了', value);
  },
  reason => {
    console.log('失败了', reason);
  }
)
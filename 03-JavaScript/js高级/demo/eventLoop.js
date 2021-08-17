//浏览器的事件环（node v10+与浏览器机制保持一致）
//宏任务和微任务
/*宏任务(macro)
  script 
  Ajax
  Event
  requestFrameAnimation
  setTimeout,setInterval
  setImmediate  (IE下)
  MessageChannel
  UI rendering
*/

/*微任务(micro)
	promise.then()
	MutationObserver
  process.nextTick  
*/


//macro 和 micro 的关系及其执行顺序
// 1.先执行script 宏任务---启动主任务执行栈
// 2. 同步代码自上而下执行，异步代码（宏任务和微任务）的代码 分别存放到 对应的任务队列中
//3. 当主任务执行栈代码执行完毕，先清空 微任务队列，再从宏任务队列中按顺序拿出一个到达执行条件的宏任务执行
//4. 在这个宏任务中就有 同步代码和异步代码，重复1,2,3步骤


//vue中的$nextTick
//使用
let a = 1;
$vm.$nextTick(() => {
  console.log(a);
})
a = 999;
//结果：999

// vue中的$nextTick 的原理
//$nextTick 是一个微任务
//先执行同步代码
//再执行微任务中的代码

//vue中$nextTick的源码分析
/*
  $nextTick(callback) 相当于
  
  */
const callbacks = [];
new Promise((resolve, reject) => {
  callbacks.push(callback)
  resolve();
}).then(() => {
  callbacks.forEach(f=>f());
})













{ //vue中 nextStick 的源码

  export let isUsingMicroTask = false

  const callbacks = []
  let pending = false

  function flushCallbacks() {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
      copies[i]()
    }
  }


  let timerFunc
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    const p = Promise.resolve()
    timerFunc = () => {
      p.then(flushCallbacks)
      if (isIOS) setTimeout(noop)
    }
    isUsingMicroTask = true
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
      isNative(MutationObserver) ||

      MutationObserver.toString() === '[object MutationObserverConstructor]'
    )) {

    let counter = 1
    const observer = new MutationObserver(flushCallbacks)
    const textNode = document.createTextNode(String(counter))
    observer.observe(textNode, {
      characterData: true
    })
    timerFunc = () => {
      counter = (counter + 1) % 2
      textNode.data = String(counter)
    }
    isUsingMicroTask = true
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {

    timerFunc = () => {
      setImmediate(flushCallbacks)
    }
  } else {
    timerFunc = () => {
      setTimeout(flushCallbacks, 0)
    }
  }

  export function nextTick(cb ? : Function, ctx ? : Object) {
    let _resolve
    callbacks.push(() => {
      if (cb) {
        try {
          cb.call(ctx)
        } catch (e) {
          handleError(e, ctx, 'nextTick')
        }
      } else if (_resolve) {
        _resolve(ctx)
      }
    })
    if (!pending) {
      pending = true
      timerFunc()
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(resolve => {
        _resolve = resolve
      })
    }
  }
}
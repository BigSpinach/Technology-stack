/**
 *  4. Promise.resolve方法: Promise.resolve(value)
					说明: 用于快速返回一个状态为fulfilled或rejected的Promise实例对象
					备注：value的值可能是：(1)非Promise值  (2)Promise值

		5. Promise.reject方法: Promise.reject方法(reason)
          说明: 用于快速返回一个状态【一定】为rejected的Promise实例对象
		
    6. Promise.all方法: Promise.all(promiseArr)
          promiseArr: 包含n个Promise实例的数组
          说明: 返回一个新的Promise实例, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败。
				
    7. Promise.race方法: Promise.race(promiseArr)
          promiseArr: 包含n个Promise实例的数组
          说明: 返回一个新的Promise实例, 成功还是很失败？以最先出结果[更改状态，无论成功还是失败]的promise为准。
 * 
 */

  //Promise.resolve(value)
  //value的类型 js基本值还是新的promise呢
  //基本值，是啥就是啥，
  //新的promise类型，则将promise所管控的结果交给所被管控的promise实例
  /*
  let p0 = Promise.resolve('abc');
  let p1 = Promise.resolve(p0);
  p1.then(
    value=>{console.log(value);},
    reason=>{console.log(reason);}
  )

  //如果p0管控的是一个失败的promise呢--把失败的reason传递给自己被管控的promise实例对象
  let p0_rejected = new Promise((resolve,rejected)=>{
    rejected('err');
  })
  let p2 = Promise.resolve(p0_rejected);
  p2.then(
    value=>{console.log('成功：',value);},
    reason=>{console.log('失败：',reason);}
  )
*/








/*
  //Promise.all()
  const p1 = Promise.resolve('a')
	const p2 = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			reject('b')
		},2000)
	})
	const p3 = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			reject('c')
		},300)
	})
	const x = Promise.all([p1,p2,p3])
	x.then(
		value => {console.log('成功了',value);},
		reason => {console.log('失败了',reason);}
	) 
*/

  // //Promise.race()
  //拿到 一组promise实例对象的第一个更改状态的结果
  const p1 = Promise.reject('a')
	const p2 = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('b')
		},2000)
	})
	const p3 = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			reject('c')
		},300)
	})
  const x = Promise.race([p2,p3,p1])
	x.then(
		value => {console.log('成功了',value);},
		reason => {console.log('失败了',reason);}
	) 
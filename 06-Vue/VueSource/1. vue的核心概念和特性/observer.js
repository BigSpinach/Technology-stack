//vue如何实现响应式数据的
// 1. 使用Object.defineProperty(obj,key,{})  实现对象属性的监视
// 2. 对于数组，重写数组原型中的所有有关增删改的方法，对数组中的每一个属性做到监视

function observer(obj) {
  //监视obj中的每一个属性
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}

function defineReactive(obj, key, value) {
  //如果key也会是一个对象，则需要递归监视obj[key]
  //observer(obj[key])
  observer(value);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newValue) {
      value = newValue;
      //更新视图
    }
  })
}


//增加对数组的监视
// 重写数组的方法
let oldProtoMehtods = Array.prototype;
let proto = Object.create(oldProtoMehtods);
['push', 'splice', 'unshift'].forEach(method => {
  proto[method] = function (...args) {
    //在这里 ...args  数组传递进来的参数也应该被监控
    let inserted;//默认没有插入新的数据
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;//如果调用数组的方法 插入 了新的数据，此时需要监控这个新的数据
        break;
      case 'splice':
        inserted = args.splice(2);//只有传递三个数据的时候才是增加数据  slice(index,n,x,x,x)
        break;
    }
    observerArray(inserted);
    console.log('更新视图');
    oldProtoMehtods[method].call(this, ...args);
    //调用 Array.prototype.push.call()
    //this 指的是 谁调用的这个方法，this就是谁  
    //例如 let data = {arr:[1,2,3],222}
    // data.arr.push(123);
    //这里的this就是 data.arr
    
  }
})



function observerArray(obj) { // 观察数组中的每一项
  for (let i = 0; i < obj.length; i++) {
    observer(obj[i]);
  }
}

function observer(obj) {
  //监视obj中的每一个属性
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    //obj是数组
    obj.__proto__ = proto; //重写数组的方法  proto
    observerArray(obj);
  } else {
    for (let key in obj) {
      //obj是对象
      defineReactive(obj, key, obj[key]);
    }
  }
}
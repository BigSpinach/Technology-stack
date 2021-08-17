//proxy 代理

let o = {
  a: 1,
  b: 3
};
let arr = [1, 2, 3, 4];
let proxy = new Proxy(o, {
  get(target, key) {
    //return target[key] 
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log('update');
    //return target[key]=value
    return Reflect.set(target, key, value);
  }
});

//使用
o.x = '哈哈哈';
console.log(o); //{ a: 1, b: 3, x: '哈哈哈' }
console.log(proxy); //{ a: 1, b: 3, x: '哈哈哈' }

console.log('-----------------------------------------------');

let arr = [1, 2, 3, 4];
let proxy2 = new Proxy(arr, {
  get(target, key) {
    //return target[key]
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    //可以通过条件判断，选择性的拦截部分属性
    if (key === 'length') return true;
    console.log('update');
    return Reflect.set(target, key, value);
  }
});

//使用
proxy2.push(250);
console.log(arr); //[ 1, 2, 3, 4, 250 ]
console.log(proxy2); //[ 1, 2, 3, 4, 250 ]


console.log('--------------多层代理---------------');
let obj = {
  a: {
    a: 1
  }
};
let proxy3 = new Proxy(obj, handler);
let handler = {
  get(target, key) {
    //判断 如果 target[key]==='object' 继续创建新代理代理内部对象
    if(target[key]==='object'){
      return new Proxy(target[key],handler); 
    }
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    if (key === 'length') return true;
    console.log('update');
    return Reflect.set(target, key, value);
  }
}
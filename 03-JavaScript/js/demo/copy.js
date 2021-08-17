/*
  1、数据类型：
    * 数据分为基本的数据类型(String, Number, boolean, Null, Undefined)和对象数据类型
    - 基本数据类型：
      特点： 存储的是该对象的实际数据
    - 对象数据类型：
      特点： 存储的是该对象在栈中引用，真实的数据存放在堆内存里
  2、复制数据
    - 基本数据类型存放的就是实际的数据，可直接复制
      let number2 = 2;
      let number1 = number2;
    - 克隆数据：对象/数组
      1、区别： 浅拷贝/深度拷贝
        判断： 拷贝是否产生了新的数据还是拷贝的是数据的引用
        知识点：对象数据存放的是对象在栈内存的引用，直接复制的是对象的引用
        let obj = {username: 'kobe'}
        let obj1 = obj; // obj1 复制了obj在栈内存的引用
      2、常用的拷贝技术
        1). arr.concat(): 数组浅拷贝
        2). arr.slice(): 数组浅拷贝
        3). JSON.parse(JSON.stringify(arr/obj)): 数组或对象深拷贝, 但不能处理函数数据
        4). 浅拷贝包含函数数据的对象/数组

*/


console.log('---------------- 定义检测数据类型的方法 ------------------------');
// 1) 怎么判断数据的类型
// typeof object Array
// Object.prototype.toString.call()
// instanceof 可以判断类型 判断是谁的实例
// constructor 构造函数

// function checkoutType(target) {
//   return Object.prototype.toString.call(target).slice(8, -1);
// }

//for...in  拷贝


console.log('---------------- 深度克隆引入  ------------------------');
// obj保存的是对象的内存地址
// let obj = {
//   username: 'BigSpinach',
//   age: 28
// };
// let obj2 = obj;
// obj2.username = 'Tiki'
// console.log(obj.username);//Tiki
// 变量保存的基本数据类型，保存的值本身
// let num = 123;
// let num2 = num; // 值传递，修改新的数据不会影响原数据
// num2 = 234;
// console.log(num);

console.log('---------------- 拷贝： 深拷贝，浅拷贝 ------------------------');
/*拷贝： 深拷贝，浅拷贝
判断依据：
  修改拷贝之源（或拷贝后）数据会不会影响另一个数据
  + 影响另一个，则说明只是对拷贝数据的引用-------属于浅拷贝
  + 不影响，说明是完全拷贝---属于深拷贝
*/


// let obj = {username: 'kobe',  age: 43};
// let obj2 = {};
// obj2.username = obj.username;
// obj2.age = obj.age;
// obj2.username = 'wade'
// console.log(obj.username);

console.log('----------浅拷贝 arr.concat()---------------');
// // 浅拷贝 arr.concat(): 数组浅拷贝
// let arr = [1,2,3, {username: 'kobe'}];
// let testArr = [4,5];
// let arr2 = arr.concat();
// console.log(arr2);
// arr2[3].username = 'wade';
// console.log(arr, arr2);//修改一个的值，另一个也会发生改变（浅拷贝）

console.log('----------浅拷贝 arr.slice()---------------');
// // arr.slice(): 数组浅拷贝
// let arr = [1,2,3, {username: 'kobe'}];
// let arr3 = arr.slice(0);
// arr3[3].username = 'duncan';
// console.log(arr3, arr);

console.log('----------深拷贝 JSON.parse(JSON.stringify(arr/obj)) ---------------');
// JSON.parse(JSON.stringify(arr/obj)) 将json数据 和 原生的js对象/数组相互转换 json数据： json对象，json数组
// let obj = {username: 'kobe',  age: 43,hobby:{option1:'soccer',option2:'programer'}};// 不能处理函数的拷贝
// let obj2 = JSON.parse(JSON.stringify(obj))
// console.log(obj2);
// obj2.hobby.option1 = 'game';
// console.log(obj2, obj);//修改一个的值，另一个不会发生改变（深拷贝）

console.log('----------浅拷贝 Object.assign(target, source1, source2..) ---------------');
//Object.assign(target, source1, source2..)
// let obj = {username: 'kobe',  age: 43,hobby:{option1:'soccer',option2:'programer'}};
// let obj2 = {};
// Object.assign(obj2, obj);
// obj2.hobby.option1  = 'gaming';
// console.log(obj2, obj);//修改一个的值，另一个也会发生改变（浅拷贝）

console.log('--------------- 实现深拷贝: 对象，数组 ----------------');

// function checkoutType(target) {
//   return Object.prototype.toString.call(target).slice(8, -1);
// }

// function clone(target) {
//   let result; // 最终加工拷贝完的数据
//   // 判断拷贝的数据是对象 || 数组 || 其他(基本数据类型，函数)， 检测数据类型
//   let targetType = checkoutType(target);
//   if (targetType === 'Array') {
//     result = [];
//   } else if (targetType === 'Object') {
//     result = {};
//   } else {
//     return target;
//   }
//   // 拷贝
//   //for...in 对象数组都可以遍历，数组遍历的是index
//   for (let item in target) {
//     // item: 对象(key)， 数组(index)
//     // target[item] 可以获取对应的value
//     let value = target[item];
//     // arr2[item] = arr[item]
//     // 判断是否是引用数据类型
//     if (checkoutType(value) === 'Object' || 'Array') {
//       result[item] = clone(value);
//     } else {
//       result[item] = value;
//     }
//   }
//   return result;
// }
// let obj = {
//   username: 'BigSpinach',
//   age: 28,
//   hobby: {
//     option1: 'soccer',
//     option2: 'programer'
//   }
// };
// let obj2 = clone(obj);
// console.log(obj, obj2);
// obj.username = 'wade';
// console.log(obj, obj2);


// obj2.hobby.option1 = '混合';
// console.log(obj, obj2);











console.log('-----------------');
//实现到 BigSpinachUtils.js
function checkoutType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
};

function clone(target) {
  let result; //返回的最终的结果（对象或数组）
  //类型检测，初始化result 的数据类型
  let checkType = checkoutType(target);
  if (checkType === 'Object') {
    result = {};
  } else if (checkType === 'Array') {
    result = [];
  } else {
    //return result=target;
    return target;
  }
  //基于 for...in 进行拷贝
  for (let item in target) {
    //target[item] 是当前对象或数组对应的key的value
    if (checkoutType(target[item]) === 'Object' || 'Array') {
      result[item] = clone(target[item])
    } else {
      result[item] = target[item];
    }
  }
  return result;
}
let obj = {
  name: 'zsf',
  age: 18,
  hobby: ['eat', 'drink', 'play', 'enjoy', 'sleep']
};
let obj2 = clone(obj);
console.log(obj, obj2);

console.log('-----深拷贝-----');

const deepClone = (value, hash = new WeakMap) => {
  if (value == null) return value; // 排除掉null 和undefine 的情况
  if (typeof value !== 'object') return value; // 这里包含了函数类型
  if (value instanceof RegExp) return new RegExp(value);
  if (value instanceof Date) return new Date(value);
  // .....
  // 拷贝的人可能是一个对象 或者是一个数组 (循环)  for in 
  let instance = new value.constructor; // 根据当前属性构造一个新的实例
  if (hash.has(value)) { // 先去hash中查看一下是否存在过 ，如果存在就把以前拷贝的返回去 
    return hash.get(value); // 返回已经拷贝的结果
  }
  hash.set(value, instance); // 没放过就放进去
  // 用一个对象来记忆
  for (let key in value) { // 一层
    if (value.hasOwnProperty(key)) { // 将hash 继续向下传递 保证这次拷贝能拿到以前拷贝的结果
      // instance[key] =value[key];
      instance[key] = deepClone(value[key], hash); // 产生的就是一个新的拷贝后的结果
    } // 过滤掉原型链上的属性
  }
  return instance
};


const obj = {
  name: 'BigSpinach',
  age: 28,
  hobbies: ['eat', 'drink', 'play', 'enjoy', 'sleep']
};
const copyObj = deepClone(obj);
//modified...
copyObj.name = 'TIKI';
obj.hobbies[0] = '吃吃吃';
//Modifications do not affect each other
console.log(obj);
console.log(copyObj);

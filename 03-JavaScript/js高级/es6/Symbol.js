//1.
let s1 = Symbol('S1');
let s2 = Symbol('S1');
console.log(s1 === s2); //false



//2. Symbol.for() 和Symbol.keyFor()
let s3 = Symbol.for('S3');
let s4 = Symbol.for('S3');
console.log(s3 === s4); //true

console.log(Symbol.keyFor(s3)); //S3


//3.属性私有化 [Symbol()]
let o = {
  [Symbol]: 1
}
console.log(o[Symbol]);


//4.元编程--改变js源代码的功能
//4.1 [Symbol.hasInstance]()
// xx  instanceof obj
let o2 = {
  name: 'BigSpinach'
};
let obj = {
  [Symbol.hasInstance]() {
    return 'name' in o2;
  }
};
//使用 调用 instanceof的时候默认调用  [Symbol.hasInstance]()
console.log(o2 instanceof obj); //true

//4.2 [Symbol.iterator]

//4.3 valueOf +  toString 
let obj = {
  //改变默认toString的行为
  [Symbol.toPrimitive](value) {
    console.log(value); //default  
    return '哈哈哈'
  }
};
console.log(obj + 1); //哈哈哈1  |默认为[object Object]1

//toString
let o3 = {
  get [Symbol.toStringTag]() {
    return '250';
  }
};
//改写的是 Object.prototype.toString 方法
console.log(o3.toString()); //原始toString返回结果 [object Object]  | 改写后[object 250]



//5.  [Symbol.species]  衍生对象
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
  static get [Symbol.species]() {
    return Array; // 控制衍生对象的类的构造函数
  }
}
let myarr = new MyArray(1, 2, 3);
let newArr = myarr.map(item => item * 2); // 衍生出来的结果是当前的实例
// instanceof 原理 .__proto__.__proto__
console.log(newArr instanceof MyArray);
// split replace match search



//6.[Symbol.unscopables]
// 我们可以声明一些属性 不在with中使用
// console.log(Array.prototype[Symbol.unscopables])
// with (Array.prototype) {
//     fill(1,2,3)
// }

class My{
  eat(){}
  get [Symbol.unscopables](){
      return {eat:true};
  }
}
with(My.prototype){
  console.log(eat);
}

// [Symbol.isConcatSpreadable]
let arr = [1,2,3];
arr[Symbol.isConcatSpreadable] = false;
console.log(arr.concat(4,5,6));
//里面有部分的对象的方法 放到 Reflect 功能基本一致 



//1. Reflect.set()
let obj = {};
//传统设置
// obj.name='BigSpinach';
// obj.age=28;

//使用Reflect
Reflect.set(obj, 'name', 'BigSpinach'); //obj.name='BigSpinach';
Reflect.set(obj, 'age', 28); //obj.age=28;
console.log(obj); //{ name: 'BigSpinach', age: 28 }

//2. Reflect.get()
console.log(Reflect.get(obj, 'age')); //28


//3. 命令式 Reflect.has(target,key)
console.log('age' in obj); //true
console.log(Reflect.has(obj, 'age'));

//4. 冻结对象
// Reflect.defineProperty  和 Object.defineProperty 的区别
let obj2 = {
  a: 2
};
Object.freeze(obj2); //这个对象上的属性就不能再被配置了，
/*会报错
Object.defineProperty(obj2,'a',{
  value:250
});
*/
let flag = Reflect.defineProperty(obj2, 'a', {
  value: 250
});
console.log(flag); //false


//5. Reflect.getOwnPropertyDescriptor(obj,'attr')
//Reflect.getOwnPropertyDescriptor(obj,'attr');
let obj3 = {
  attr: 2
};
console.log(Reflect.getOwnPropertyDescriptor(obj3, 'attr')); //{ value: 2, writable: true, enumerable: true, configurable: true }

//6.Object.getOwnPropertyNames()和 Object.getOwnPropertySymbols和 Object.keys()
//Reflect.ownKeys(obj4)
let obj4 = {
  a: 4,
  [Symbol()]: 222
}

console.log(Object.getOwnPropertyNames(obj4)); //[ 'a' ]
console.log(Object.getOwnPropertySymbols(obj4)); //[ Symbol() ]
// Object.getOwnPropertyNames
console.log(Reflect.ownKeys(obj4)); //[ 'a', Symbol() ]


//7. Object.getPropertyOf()和 Object.setPropertyOf()
//Reflect.getPropertyOf()和 Reflect.setPropertyOf()



//8.apply  Reflect.apply(fun,thisObj,[parameters])
//问题： 如何使用原型上的 apply
let obj8 = {};
let fn = function (a, b) {
  console.log(this, a, b);
}

fn.apply = function () {
  console.log('fn.apply');
}

//fn.apply(obj8,[1,2]);//{} 1 2//fn.apply
//如何才能使用原型上的apply
// fn.__proto__.apply(obj8,[1,2]);//不行？为啥？改fn.__proto__的this为obj8，并让fn.__proto__()
fn.__proto__.apply.call(fn, obj8, [1, 2]); //{} 1 2
Function.prototype.apply.call(fn, obj8, [1, 2]); //{} 1 2

//使用Reflect
//Reflect.apply 使用Function.prototype.apply
Reflect.apply(fn, obj8, [1, 2]); //{} 1 2


//9. Reflect.constructor(String) 等同于 new String();
class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


let a = new Animals('LIUKAI', 28);
let b = Reflect.construct(Animals, ['BigSpinach', 28]);
console.log(a); //Animals { name: 'LIUKAI', age: 28 }
console.log(b); //Animals { name: 'BigSpinach', age: 28 }




//10. Reflect.deleteProperty 又返回值true、false


//11. Reflect.preventExtensions 对象不可扩展
let obj11={};
Reflect.preventExtensions(obj11);
obj11.a=111;
console.log(obj11);//{}

//判断 
console.log(Reflect.isExtensible(obj11));//false


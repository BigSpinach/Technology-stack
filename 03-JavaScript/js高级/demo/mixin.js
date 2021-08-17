//装饰器   不能再node中运行

//mixin  混合
let obj = {
  name: 'tiki',
  age: 3
}

//将obj混合到类的原型上 class.prototype
//需求：Cat 上有name 和 age 属性 而且都是Cat.prototype上的方法
@mixin(obj)
class Cat {

}

function mixin(obj) {
  return function (Constructor) {
    Object.assign(Constructor.prototype, obj)
  }
}

let c1 = new Cat();
console.log(c1.name);
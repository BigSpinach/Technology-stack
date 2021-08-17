//1. 怎样用es5 来模拟 es6 中的class
//2. new 操作符的原理


function Animal(name, age) {
  //判断当时函数是不是通过new来调用的
  if (!(this instanceof Animal)) {
    throw new Error('NOT NEW');
  }
  this.name = name;
  this.age = age;

}

// Animal();//直接执行会 走if判断

//类中的属性 ：1.公有属性2.私有属性（实例上的属性）
//1. 公有属性   写在原型上的属性
//2. 每个实例独有的属性  this.xxx
let a1 = new Animal('Tiger', 2);
let a2 = new Animal('Tiki', 3);

console.log(a1.__proto__ === Animal.prototype); //true
//a1.__proto__ === Animal.prototype;//true



//继承 
function Father(userName, userAge) {
  this.userName = userName;
  this.userAge = userAge;
  this.a=250;
}

Father.prototype.say = function(){
  console.log(this.userName+' is '+this.userAge+' years old' );
}
//1. 继承实例属性
function Son(userName, userAge){
  //继承实例属性
  Father.call(this,userName, userAge);//this.userName=undefined  this.userAge = undefined this.a=250
}



//2. 继承原型上的属性
//Son.prototype = new Father();
//Son.constructor = Son;


//Son.prototype.__proto__ = Father.prototype;
//ES6 中使用 Object.setPrototypeOf();
//原理就是Son.prototype.__proto__ = Father.prototype;
//Object.setPrototypeOf(Son.prototype,Father.prototype);

//建议使用 Object.creat();
//Son.prototype = Object.creat(Father.prototype);




//Son.prototype = Object.creat(Father.prototype);
// Object.create()的原理 未处理构造函数的变化
// function create(parentProto){
//   function Fn(){}
//   Fn.prototype = parentProto;
//   return new Fn();
// }

// Son.prototype = Object.create(Father.prototype,{constructor:{value:Son}});


//Object.create()的原理 处理构造函数的变化
function myCreate(parentProto,propertiesObject){
  function Fn(){}
  Fn.prototype = parentProto;
  let fn = new Fn();
  for(let key in propertiesObject){
    fn[key] = propertiesObject[key].value;
  }
  return fn;
}
Son.prototype = myCreate(Father.prototype,{constructor:{value:Son},say2:{value:()=>{console.log('say2');}}});

let son1 = new Son('Tiki',3);
son1.say();
son1.say2();
console.log(son1);//Son { userName: undefined, userAge: undefined, a: 250 }
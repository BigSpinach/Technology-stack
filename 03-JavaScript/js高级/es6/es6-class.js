// 类
// __proto__ 指向所属类的原型
// prototype 所有类都有一个prototype属性
// constructor prototype.constructor 每个类的原型上都有这个属性

// class Animal {
//     type = '哺乳类'; // 声明到实例上的
//     constructor(){
//         this.type = '哺乳类'
//     }
//     get a(){ // Object.defineProperty(Animal.protoype,a)
//         return 1; // Animal.prototype.a = 1;
//     }

//     say(){ // 放到了原型上 // Animal.prototype.say
//         console.log(this);
//     }
//     // 静态属性就是定义到类上的属性 es6中只有静态方法
//     static get flag(){ // es6的静态属性
//         return  '动物'
//     }
// }

// let a1 = new Animal();
// console.log(a1);//Animal { type: '哺乳类' }
// console.log(Animal.flag);//动物
// console.log(a1.a);//1
// a1.say();//Animal { type: '哺乳类' }



//类的继承
class Father {
  constructor(name) {
    this.type = '父类';
    this.name = name;
  }
  get a() {
    return 1;
  }

  say() {
    console.log(this+'Father.prototype.say()');
   
  }

  static get flag() {
    // super
    //这个super指 父类
    return 'Father'
  }
}

class Son extends Father {
  constructor(name) {
    super(name);  //调用super 就是  Father.call(this,name,...)
    // super指 父类 Father
  }
  say(){
    console.log('Son.prototype.say()');
    super.say();//super指向父类的原型 Father.prototype
    
  }
}




// let son1 = new Son();
// console.log(son1); //Son { type: '父类' }
// console.log(son1.a); //1
// son1.say(); //Son { type: '父类' }
// console.log(son1.flag); //undefined
// console.log(Son.flag); //Father

let son2 = new Son('Tiki');
// console.log(son2);//Son { type: '父类', name: 'Tiki' }
son2.say();//[object Object]Father.prototype.say()
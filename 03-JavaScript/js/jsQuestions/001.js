class Calc {
  constructor() {
    this.count = 0
  }

  increase() {
    this.count++;
  }
};

const calc = new Calc();
new Calc().increase();//有疑问啊，
//new运算符优先级小于 . 运算符优先级
//但是 基于class创建出来的类不能直接 执行  Calc()//会报错
//所以理解为 new Calc()执行后返回的实例调用原型上的方法 increase，
console.log(calc.count);




console.log('----------');


function Calc2(){
  this.count = 0;
}
Calc2.prototype.increase=function(){
  this.count++;
}
Calc2()

const calc2 = new Calc2();
console.log(new Calc2().increase());
//执行顺序
//20                 20
//new运算符优先级高于函数调用优先级
//step1： Calc2()执行，返回undefined
//
console.log(calc2.count);
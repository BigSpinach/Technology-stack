//外层不使用new操作符的情况下，创建一个Fn的实例

function Fn() {
  //...
  return new Fn.prototype.aa();
}

Fn.prototype = function () {};
Fn.prototype.aa = function(){console.log('aa');};
Fn.prototype.aa.prototype = Fn.prototype;
Fn();


/*
  修改aa的原型为 Fn.prototype
  Fn构造函数中返回一个 new aa即可
*/

//使用
Fn() //返回一个new Fn()
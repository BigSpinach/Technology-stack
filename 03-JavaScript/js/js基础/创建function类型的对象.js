// 1. 使用function 关键字 声明的  方式创建

function logOk(){
  console.log('OK');
}


// 2. 函数表达式
var sayHello = function(){
  console.log('Hello');
}

  //函数表达式之深入
  var sayHello = function(){
    console.log('Hello');
  }
  //相当于
  var anonymous = function(){};
  var sayHello = anonymous;


// 3. 使用构造函数 Function 的方式创建（不常用）
const sum = new Function('a', 'b', 'return a + b');





// 
//js中常见模块：  es模块   commonjs模块

//特点 ： 每一个文件就是一个模块

// 语法： require module.exports



//如何实现模块化
//1. 命名空间的方式
//2. 自执行函数的方式


//node让js拥有了在服务端执行的能力
//commonjs 实现的基本原理
//拼函数  字符串，让拼好的字符串函数执行 
// 让字符串执行的方式 3种  
// 1.eval
//eval 的缺陷---污染作用域的问题
let a =1;
eval('console.log(a)');//1 



// 2.new Function  
let funStr ='console.log(a,b)';
let fn = new Function('a','b',funStr);
fn(1,2);//1 2

// 3.node中使用 vm 虚拟机模块
let vm = require('vm');
let funStr2 = 'console.log(a)';
vm.runInThisContext(funStr2);//报错 ： a is not defined



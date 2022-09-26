
/**
 * 1.Node中任何一个模块（js文件）都被一个外层函数所包裹
 * 
 * 
 * * 2.为什么要设计这个外层函数（这个外层函数有什么作用？）
*     1).用于支持模块化语法
*     2).隐藏服务器内部实现(从作用域角度去看)
 */

//通过函数输出函数自身的机制  arguments.callee

console.log(arguments.callee.toString());
/**
function (exports, require, module, __filename, __dirname) {
      console.log(arguments.callee.toString());
}
该函数是Node.js提供的模块化函数。
 */
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module4');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.say(); /*模块 的引入文件
                        
                          import {} from './xx'  分别导出和统一导出使用
                          import x from './yy'   默认导出使用
                        
                          //进阶版
                          import * as obj from './zzz'  把zzz模块中的所有导出收集到 obj这个对象中
                        
                        */

//import module4,* as obj from "./module4";
//module4 为默认导出部分
//obj 为分别导出和统一导出部分，最终收集到obj这个对象中


/*
console.log(module4.say());
console.log(obj.arr4);
console.log(obj.arr5);

console.log(obj.moduleObj4);
console.log(obj.moduleObj5);
*/

console.log(_module2.default.age);

console.log(_module.arr5);
console.log(_module.moduleObj4);
console.log(_module.moduleObj5);
},{"./module4":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  混合导出 = 分别导出+统一导出+默认导出
   

*/

//分别导出
var name5 = exports.name5 = 'module4-name';

var arr5 = exports.arr5 = [12, 3, 4, 5, 6, 8];

var moduleObj5 = exports.moduleObj5 = { name: 'module5' };

console.log('module4中的 log语句');

var name4 = 'module1-name';

var arr4 = [12, 3, 4, 5, 6, 8];

var moduleObj4 = {
  name: 'module4'
};

console.log('module4中的 log语句');

exports.arr4 = arr4;
exports.name4 = name4;
exports.moduleObj4 = moduleObj4;
exports.default = {
  age: 999,
  say: function say() {
    console.log('说话-混合');
  },

  arr3: [1, 3, 2, 4, 5, 3, 2, 9, 6, 6, 888, 'ssss']
};
},{}]},{},[1]);

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
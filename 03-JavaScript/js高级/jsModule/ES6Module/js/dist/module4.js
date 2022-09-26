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
/*模块 的引入文件

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

import module4,{arr4,arr5,name4,name5,moduleObj4,moduleObj5} from './module4'

module4.say()
console.log(module4.age);

console.log(arr5);
console.log(moduleObj4);
console.log(moduleObj5);



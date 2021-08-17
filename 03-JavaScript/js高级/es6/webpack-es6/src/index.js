//导入
// import { a,b } from "./1";
//导入
// import {x,y} from "./2";
//导入常量
// import _ from './3';
//导入常量-便携式
import {e,f} from './4';

//导入合并的文件
import * as obj from "./hebing";

// import * as obj from './4';
// console.log(obj);



//使用
//console.log(a,b);
//console.log(x,y);
//console.log(_);
// e=250;
//f=260;   导入的变量只允许使用，不能修改
//console.log(e,f);

//合并的使用
console.log(obj);
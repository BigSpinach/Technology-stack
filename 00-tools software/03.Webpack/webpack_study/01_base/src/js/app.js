//导入
import {sum,sub} from './module1.js';
import {a,xxx as b} from './module2.js';
import fn from './module3.js';
import obj,* as obj2 from './module4.js';

//测试webpack不支持es6其他语法
import module_es6 from './module_es6';
module_es6();//查看webpack构建后的app.js文件，箭头函数依旧保留，没有转成ES5

//测试json格式的文件做默认导出引入
import data from '../json/data.json';
console.log('json格式的文件：',data);


console.log(sum(1,2));
console.log(sub(1,2));
console.log(sum(a,b));
fn();
console.log(obj,obj2);







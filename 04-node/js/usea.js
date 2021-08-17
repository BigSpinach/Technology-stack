// let a = require('./a');
// console.log(a); //123

//模拟require的原理
// let  a = (function(){
//   module.exports = 123;
//   return module.exports;
// })();
// console.log(a);//123


// let head = `(function(){`
// let content = `module.exports = 123;`
// let tail = `return module.exports;
// })()`
// let str =head+content+tail;
// console.log(str);//(function(){module.exports = 123;return module.exports;})
// let str = 'let  a = (function(){module.exports = 123;return module.exports;})();console.log(a);'

// let vm = require('vm');
// //vm.runInThisContext(str);
// //new Function(str);


let vm =require('vm');
let path = require('path');
let fs =require('fs');

//require  module.exports 的核心逻辑
function req(filePath){
  //1. 把当前文件读取出来
  let absPath = path.resolve(__dirname,filePath);
  //2. 创建一个模块
  // 模块需要有一个exports属性
  let module =new Module(absPath);// module = {id=absPath;exports = {}}
  //3. 加载创建的这个模块，并向外暴露接口
  module.load();
  return module.exports;

}


const wrapper = ['(function(exports,module,require){','})'];
class Module{
  constructor(id){
    this.exports={};
    this.id=id;
  }
  load(){
    //核心逻辑是拼函数字符串，并执行拼好后的函数字符串
    let script = fs.readFileSync(this.id,'utf-8');
    let funStr = wrapper[0]+script+wrapper[1];
    let fn = vm.runInThisContext(funStr);
    // fn(this.exports,this,req);
    fn(this.exports,this);

  }
}

let aaa =req('./a.js');
console.log(aaa);

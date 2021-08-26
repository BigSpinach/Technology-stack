//根据 
//module.exports =666;
//需要实现
/*
(function(){
  module.exports =666;
  return module.exports
})
*/
//推断出 这个函数需要的参数有  实例module，以及module.exports 属性，
// 这个函数的目的就是给 module.exports重新赋值，并将重新赋的值 return 出来

//根据 require
//let a =require('./a.js');
//推断出 require 需要实现的功能  创建module 实例，并触发修改module.exports 属性的函数，
//还要将 最终修改后的 module.exports 返回
//实现require的核心逻辑
let vm =require('vm');
let path = require('path');
let fs =require('fs');


function req(filePath){
  let absPath = path.resolve(__dirname,filePath);
  console.log(absPath);
  let module = new Module(absPath);
  module.load();
  return module.exports;
}

function Module(id){
  this.id = id;
  this.exports = {};
}
const wrapper = ['(function(exports,module,require){','})'];
Module.prototype.load =function(){
  //核心 ：拼接函数  将拼接的函数执行
  let script = fs.readFileSync(this.id,'utf8');
  let str = wrapper[0]+script+wrapper[1];
  let fn = vm.runInThisContext(str);
  //console.log(fn.toString());
  //function(exports,module,require){module.exports=123;}
  console.dir(module);
  fn(module,this);
}

//test 
let a =req('./a.js');
console.log(a);





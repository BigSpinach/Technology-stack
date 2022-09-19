exports.peiqi = [1, 3, 5, 7, 9]

/*问题:
  1.暴露的本质到底是什么?module.exports所指向的那个对象
  2.在CommonJs模块规范中，module.exports 和 exports.xxx 不能混用。
  3.如果混用，以module.exports为主*/
/*module.exports = function haha() {
  console.log('哈哈')
}*/



function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
Module.prototype.load = function (filename) {
  //...
  return this.exports;
}

//Require的核心逻辑，这里的load即require方法
var module = new Module(filename, parent);
module.load(filename);


/*load中干了的事情
	fs.readFileSync(filename, 'utf8')
	拼接函数
	让拼接的函数执行  意味着 module.js中的所有js代码都会执行
  将用户修改后的结果返回
 return module.exports;*/


//所以 module.exports ={新obj}则属于重新赋值
//exports.xxx 则属于给原有对象进行增添属性和值的操作
console.log(module.exports === exports); //true
console.log(exports); //{}
console.log(module.exports);
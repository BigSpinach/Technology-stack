/*
commonjs的核心逻辑实现
 首先明确 module.export =xxx;
可以知道  
	有一个Module构造函数，
	这个构造函数最终返回了一个 module 对象，
	用户传递的 xxx最终挂载到module对象的exports属性上

很容易的就可以写出这样的代码
function Module(){
	this.exports=*;//*最终会被用户传递的数据替换掉----------在这离使用了{} ,为啥是{} 而不是其他数据类型
			因为用户传递的数据是多样的，显然[] 和普通数据类型不可以
}

继续分析：require 方法  ： 
	let a =require('./a.js'); //a 就可以得到 module.exports 返回的那个值 
				//即 ：a.js文件中 module.exports=xxx,这里的  a=xxx

所以require的核心代码是
function require(filePath){//filePath 就是传递进来的 ./a/js
	//一般的我们只需在这里返回  module.exports 即可
	let module =new Module();
	return module.exports;
	//显然这样写 ，require最终得到的只是module.exports 返回的那个空{}  而已
	//并不是 用户传递的 xxx
	//此时就需要一个方法，用于替换掉 module.exports 中的值即可
}
//所以 改进版的 require
function require(filePath){
	let module =new Module();
	module.load();//至于load为啥放在 Module的原型上，思考: 因为每一个module的实例都需要这样一个方法用于处理 替换module.exports 的默认值
	return module.exports;
}
Module.prototype.load=function(){
	//将 用户传递的 文件读取， 
	//拼接成一个新函数
	//并将拼接好的函数执行  vm虚拟机
	let script = fs.readFileSync(this.id)//  所以 每一个module 实例上有一个id属性，用于存储用户传递的解析的路径地址
	//拼接新函数
	let str ='(function(exports,module,require){'  + script + '})'
	//参数分析：这个script中有 啥呢   module.exports  
	//所以参数就必须有  module ,exports
	//至于为啥要有 require  :在script中我们也可以引入别的代码 ，所以就有了 require
	//当然了，源码中 有5个参数：filePath,
	
	//将拼接好的函数执行
	let fn = vm.runInThisContext(str);
	fn(module,this);

	
}

*/
//传统 js对象通过 调用toString方法来显式调用[[Class]]这个内置属性
var obj = {};
console.log(obj.toString());//[object Object]
//这里返回的是  [object [[Class]]]

var str = 'abcdef';
console.log(str.toString());//'abcdef'
//String.prototype中重写了 toString方法
//需要强制使用Object.prototype上的toString方法
console.log(Object.prototype.toString.call(str));//[object String]

//显式修改toString的结果
//使用统一的Symbol.toStringTag接口，修改[[Class]]默认行为
var o = { [Symbol.toStringTag]: "MyObject" };
console.log(o.toString());//[object MyObject]

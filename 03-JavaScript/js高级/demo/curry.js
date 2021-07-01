//柯理化
//函数对参数的预处理
//将一个大函数拆分成若干个小函数

/*
//初级使用
const checkType = (content,type)=>{
  return Object.prototype.toString.call(content) === type;
};
console.log(checkType(123,'[object Number]'));//true
*/

//第二个参数不要手动传，使用调用函数的方式
//例如 isString('abc');


const checkType = (type)=>{
  //保留content
  return (content)=>{
    //Object.prototype.toString.call(content) === `[object ${type}]`;
   return  Object.prototype.toString.call(content).slice(8,-1) ===type;
  }
};

/*
//简单创建一个isNumber的方法
let isNumber = checkType('Number');
//调用checkType的返回的（回调）函数
console.log(isNumber(123));//true
*/


//批量创建 is类型判断的方法
let types = ['String','Object','Number','Symbol','Null','Undefined','Function','BigInt','Boolean'];
let utils={};
types.forEach(item=>{
  utils['is'+item]=checkType(item);
});

console.log(utils.isNumber(123));//true




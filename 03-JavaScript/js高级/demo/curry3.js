//通用柯理化
const currying = (fn,arr=[])=>{
  let len = fn.length;//函数的length表示参数的个数
  return (...args)=>{
    arr = arr.concat(args);
    if(arr.length<len){
      return currying(fn,arr);
    }else if(arr.length ===len){
      return fn(...arr); 
    }
  }
}

const add = (a,b,c)=>{
  return a*b*c;
}
//currying(add)


const checkType=(type,context)=>{
  return Object.prototype.toString.call(context)===`[object ${type}]`;
}
let types = ['String','Object','Number','Symbol','Null','Undefined','Function','BigInt','Boolean'];
let utils={};
//批量生产 isString这样的方法
types.forEach(type=>{
  utils["is"+type] = currying(checkType)(type);
  //currying(checkout)(type)//先预处理第一个参数
  //返回的isString 还是一个 currying(checkType)
  //当执行 isString(123)的时候，实际上是currying(checkType)(context)
});

console.log(utils.isNumber(123));//true
//实现 add(1,2,3,4,5,6);
//使用  add(1,2)(3,4,5)(6)
//目标 收集函数参数，个数到达后执行

//通用柯理化
const currying = (fn, arr = []) => {
  //arr用于收集fn的目标参数的个数
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args); //收集传递进来的参数---fn(1,2)
    if (arr.length < len) { //说明收集的参数不够，继续收集，
      //继续执行currying(fn,arr)
      //console.log(`参数不够，还缺少${len-arr.length}个参数`)
      return currying(fn, arr);
    }else if(arr.length ===len){
      //说明参数收集够了，执行fn这个方法
      //不仅要返回fn执行的结果，还要返回一个函数，处理超过参数的情况
      return fn(...arr);
  }
}

let add = (a, b, c, d, e, f) => {
  return a + b + c + d + e + f;
}

//用currying包装这个函数
// console.log(currying(add)(1, 2)(2, 5));
console.log(currying(add)(1, 2)(2, 5)(2, 5));
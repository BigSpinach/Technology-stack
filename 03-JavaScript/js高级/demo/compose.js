//数组扁平化
// let f = [1,2,[3,4,[5,8,9]],666].flat(100);
// console.log(f);

//compose 函数的组合  redux

function sum(a, b) {
  return a + b;
}

function len(str) {
  return str.length;
}

function addCurrency(val) {
  return '￥' + val;
}

console.log(addCurrency(len(sum('abc', 'def')))); //￥6

let result = compose(addCurrency, len, sum)('abc', 'def'); //
console.log(result);


function compose(...args) {
  return function (...values) {
    let fn = args.pop();
    return args.reduceRight((prev, current) => {
      return current(prev);
    }, fn(...values));
  }
}

// let result = compose(addCurrency, len, sum)('abc', 'def');
// console.log(result);



//compose
//实现效果
//compose(a,b,c)(1,2,3);//=> a(b(c(1,2,3)));
const compose2 = (...args) => { //...args = a,b,c
  return (...values) => { //...values = 1,2,3
    //拿出 args的最后一项fn，并删除最后一项
    let fn = args.pop(); //这里相当于 c函数  
    //使用reduceRight
    //拿出最后一项，并传参values ， fn(...values) 并将 fn作为 reduceRight的第一项
    //这里相当于 c(1,2,3)
    return args.reduceRight((prev, current) => {
      return current(prev); //将返回的这个 b(c)当做下一次的prev  下一次current 为 a
      // a(prev)    a(b(c))
    }, fn(...values));
  }
}

let result2 = compose2(addCurrency, len, sum)('abc', 'def');
console.log(result2); //￥6



//es6 语法精简代码
const compose3 = (...args) => (...values) => {
  let f = args.pop();
  return args.reduceRight((prev, current) => current(prev), f(...values));
}


//redux中的compose
const compose = (...args) => {
  return args.reduce((prev, current) => {
    return (...values) => {
      return prev(current(...values));
    }
  })
}

//简写
const compose = (...args) => args.reduce((prev, current) => (...values) => prev(current(...values)))
/*打印0~100以内所有的能被3整除的数字 */
/*
  [a,b]区间
*/
function fn(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i % 3 == 0 || i % 7 == 0) {
      arr.push(i);
      console.log(arr);
    }
  }
  return arr;
}
console.log(fn(100, 200));


/*打印三位数位上有3或者7的数字*/
// function fn2(num){
//   let arr=[];
//   if(num<100|| num>999){
//     return;
//   }

//   let  numStr = num+'';
//   if(numStr.indexOf(3)||numStr.indexOf(7)){
//     arr.push(num);
//   }
//   return arr;
// }
// fn2(123);

function fn3() {
  let arr=[];
  for (let i = 100; i < 1000; i++) {
    let numStr = i + '';
    if (numStr.indexOf(3)>-1 || numStr.indexOf(7)>-1) {
      arr.push(i);
    }
  }
  return arr;
}
fn3();

/*打印三位数位上有m或者n的数字 */
function fn4() {
  let arr=[];
  for (let i = 100; i < 1000; i++) {
    let numStr = i + '';
    if (numStr.indexOf(m)>-1 || numStr.indexOf(n)>-1) {
      arr.push(i);
    }
  }
  return arr;
}
fn3();

/*计算100的阶乘 1*2....*100    */
function fn5(n) {
  let target=1;
  for(let i=1;i<=n;i++){
    target*=i;
  }
  return target;
}
fn5(100);
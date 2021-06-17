//1.
{
  if ('m' in window) {
    var m = m && 10;
  }
  console.log(m);
}


//2.
{

  if (!('m' in window)) {
    let m = m + 10; //报错 Uncaught ReferenceError: Cannot access 'm' before initialization
  }
  console.log(m);
}


//3.
{
  let ary = [12, 23, 34, 45];
  (function (ary) {
    ary.pop();//修改外部的 ary
    ary = ary.slice(0);//slice 创建新数组
    ary.shift();//
    console.log(ary);
  })(ary);

  console.log(ary);
}
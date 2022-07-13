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
    ary.pop(); //修改外部的 ary
    ary = ary.slice(0); //slice 创建新数组
    ary.shift(); //
    console.log(ary);
  })(ary);

  console.log(ary);
}

//4.
{
  var n = 2;

  function a() {
    var n = 3;

    function b(m) {
      alert(++n + m);
    }
    b(4);
    return b;
  }
  var c = a(5);
  c(6);
  alert(n);

  /*
  1.变量提升阶段  
    function a
    var n,c
  2.代码执行
    n=2
    c=a(5)
      a(5)执行，a函数执行，传递5,无参数接收。
        形参赋值，变量提升
          function b(m)
          var n
        代码执行
          n=3
          b(4)  
            ++n+m// ++3+4 =>  修改上级作用域的n=4
          return b;//  将b函数返回给c

    a(6);
      即b(6);
        形参赋值 m=6
        代码执行 ++n+m
          ++4+6   => 11
          修改上级作用域n = 5
    alert(n);// 全局的n=2
  */
}


//5
{
  let n = 2,
    fn = () => {
      this.n *= 3;
      n++;
      return m => console.log((++n) + m);
    };
  let f = fn(4);
  f(5);
  fn(4)(5);
  f(6);
  console.log(n);

  //fn(4) 执行  this.n*3;n++  n为 上级作用域（全局中的n）let创建的n跟window没关系，
                              //所以this.n*=3  winnow.n =undefined  undefined*=3 = NaN
                              //n++ 上级作用域 n改为 3
    //f(5)执行  形参m=5 ++n+m n为上级作用域的n（3），（上级作用域n）改为4,
        //输出4+5=9

    //fn(4)(5);执行
      //fn(4)执行，window.n*=3,
        //n++ 全局的n(4)改为5
      //fn(5)  全局的n改为 6 
        //输出6+5   11

      //f(6)执行
      //++n+6  上级作用域n改为 7  
      //输出7+6=13

      //log(n)//7
  
}

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  var age = 21;
 }
 sayHi();
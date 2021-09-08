//example 1
let a={}, b='0', c=0;  
a[b]='刘凯';
a[c]='钟赛';  
console.log(a);
/*
a={
  '0':"刘凯",
  '0':"钟赛"
}
属性名会 调用toString
*/

//--------------
//example 2
let a={}, b=Symbol('1'), c=Symbol('1');  
a[b]='刘凯';
a[c]='钟赛';  
console.log(a[b]);


//------
//example 3
let a={}, b={n:'1'}, c={m:'2'};  
a[b]='刘凯';
a[c]='钟赛';   
console.log(a[b]);
console.log(a);
/*
a={
  '[object Object]':'刘凯',
  '[object Object]':'钟赛'
}
*/

//---------
var test = (function(i){
  return function(){
      alert(i*=2);
  }
})(2);// test = function(){alert(i*=2))}
test(5);//test(5)  5传递没用形参接收，等于没用， 执行alert(i*=2) 
// i是自执行函数中的形参， i=2
//所以 alert(4)



//--------
var a=0,
    b=0;
function A(a){
    A=function(b){
        alert(a+b++);
    };
    alert(a++);
}
A(1);
// 形参赋值 a=1 
//A=重新赋值（给了另一个引用地址）
// alert(1++)   1
A(2);
//另一个引用地址 A=function(b){...}
// 形参赋值 b =2 ;
// a? 自己没有，上级作用域中查找，a=2
// 2+2++  //4
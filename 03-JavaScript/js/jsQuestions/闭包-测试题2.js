function fun() {
  var num = 2;
  function fun2() {
    num++;
    console.log(num);
  }
  return fun2;
}

var fun2 = fun();
console.log('-------------------------'); // 外部函数fun执行完了
fun2();// 3
fun2();// 4
fun2 = fun();
fun2();
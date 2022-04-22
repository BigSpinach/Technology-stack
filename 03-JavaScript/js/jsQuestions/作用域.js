 console.log(fn); // var fn;
  var fn = function () { // fn = function
    console.log(fn)
  }
  console.log(fn); 
  fn()


  // var obj = {
  //   fn2: function () {
  //     console.log(fn2) // 报错
  //   }
  // }
  // obj.fn2()


  var a = 123;
  var b = 'abc'
  function fun() {
    var a = 234;
    var c = 345;
    console.log(a);
    console.log(b);
    function fun2() {
      console.log(c);
      console.log(d);
    }    
    fun2();
  }

  fun();
  //22---234
  //23---'abc'
  //fun2()
  //25--- 345
  //26---报错

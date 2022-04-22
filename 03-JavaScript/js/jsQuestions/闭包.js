/*------------------------- */
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  }
};
object.getNameFunc()();
/*
  object.getNameFunc() 
  执行，返回一个匿名函数 function(){return this.name}
  然后让这个方法执行，这个方法执行，是window直接调用的它
  所以this是window
*/
/*------------------------- */



/*------------------------- */
var name2 = "The Window";
var object2 = {
  name2: "My Object",
  getNameFunc: function () {
    var that = this; // 缓存this
    return function () {
      return that.name2;
    };
  }
};
console.log(object2.getNameFunc()()); //"My Object"
/*------------------------- */


/*-------------------------- */
function fun() {
  fun2();
}
fun();
function fun2() {
  console.log(this);
}
fun2();//window
/*-------------------------- */

/*----------------------- */
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      var num = 123;
      return fun(m, n);
    }
  }
}
var b = fun(0).fun(1).fun(2).fun(3).fun(30).fun(55) 
var c = fun(0).fun(1) 
c.fun(2) 
c.fun(3) 
var a = fun(0) 
a.fun(1)
a.fun(2)
a.fun(3) 
/*----------------------- */



/*----------------------- */
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      var num = 123;
      return fun(m, num);
    }
  }
}


var b = fun(0).fun(1).fun(2).fun(3).fun(30).fun(55) 
//     undefined  123  123    123   123     123

/*----------------------- */





/*----------------------- */
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      var num = 123;
      return fun(m, n);
    }
  }
}


var b = fun(0).fun(1).fun(2).fun(3).fun(30).fun(55) 
//    undefined  0      1      2      3       30      

/*----------------------- */







/*----------------------- */
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      var num = 123;
      return fun(m, n);
    }
  }
}

var b = fun(0).fun(1).fun(2).fun(3).fun(30).fun(55) 

var c = fun(0).fun(1)
c.fun(2) 
c.fun(3) 


var a = fun(0)
a.fun(1) 
a.fun(2)
a.fun(3) 
/*----------------------- */








/*----------------------- */
/*----------------------- */
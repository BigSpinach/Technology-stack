var fullName = 'language';
var obj = {
  fullName : 'javascript',
  prop:{
    getFullName:function () {
      return this.fullName;
    }
  }
};


console.log(obj.prop.getFullName());//obj.prop.fullName => undefined
var test = obj.prop.getFullName;
console.log(test());



var name = 'window';
var Tom = {
  name : 'Tom',
  show:function () {
    console.log(this.name );
  },
  wait:function () {
    var fun = this.show;//这里只是把 show这个函数的代码字符串拿过来了，函数执行才会形参函数作用域
    fun();//fun()方法前边没. this=>window
    
  }
};

Tom.wait();//this=>window


//js继承

{
  //方式1 ----原型继承
  function Father() {
    this.a = 1;
    this.b = 2;
  };
  Father.prototype.getA = function () {
    console.log(this.a);
  }

  function Son() {
    this.a = 10;
    this.b = 20;
  };
  Son.prototype.getA = function () {
    console.log(this.a);
  }

  //子类继承父类，通过设定子类的原型指向父类的实例即可
  Son.prototype = new Father(); //重定向后原有的Son.prototype上的方法都失效

  console.dir(new Son());
  //丢失 constructor属性指向 Son
  Son.prototype.constructor = Son;
  console.dir(new Son());
}

{
  //方式2-----call继承
  function Father() {
    this.a = 1;
    this.b = 2;
  };
  Father.prototype.getA = function () {
    console.log(this.a);
  }

  function Son() {
    this.a = 10;
    this.b = 20;
    Father.call(this); //Father(),并改变Father中的this为Son的实例
    //仅仅只是把父类的私有属性给了子类，父类原型上的属性和方法子类都不会拥有
  };
  Son.prototype = Father.prototype; //原型重定向
  Son.prototype.constructor = Son;

  console.dir(new Son());
}

{
  //方式3   ------Object.create(obj[,context]);
  //方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  /*
    1.创建一个空对象
    2.让新创建的空对象的__proto__指向第一个传递进来的对象
      （把obj作为新创建的对象的原型）
  */
  Object.create = function (proto, propertiesObject) {
    //...
    function F() {}
    F.prototype = proto;

    return new F();
  }

  //实例 查看控制台
  let obj = {
    a: 0
  };
  let o = Object.create(obj);
  console.dir(o); //把obj作为 o的原型  o.prototype = obj
  /*
  Object
    __proto__: 
      a: 0
      __proto__: Object
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        ...
  */


  function Father() {
    this.a = 1;
    this.b = 2;
  };
  Father.prototype.getA = function () {
    console.log(this.a);
  }

  function Son() {
    this.a = 10;
    this.b = 20;
  };
  Son.prototype = Object.create(Father.prototype);
  // Object.create(Father.prototype);//创建一个新对象，这个新对象的__proto__指向Father.prototype
  //Son.prototype = 这个对象
  console.dir(new Son());
}

{
  //方式4    class Son extends Father
  class Fn{
    constructor(n,m){
      //constructor指向函数本身  => Fn
      this.n=n;
      this.m=m;
    }

    //相当于 Fn.prototype.getN
    getN(){
      console.log(this.n);
    }
    //只支持方法，不能写属性
    //x:250

    static AA(){
      //私有方法，相当于Fn.AA()
    }
  }
  //非要给class的原型上添加属性
  Fn.prototype.x=250;
  console.dir(new Fn());
  //Fn()//基于class创建出来的类，只能new执行，不能当做普通函数执行
}
/*
  1. 通过class定义类/实现类的继承
  2. 在类中通过constructor定义构造方法
  3. 通过new来创建类的实例
  4. 通过extends来实现类的继承
  5. 通过super调用父类的构造方法
  6. 重写从父类中继承的一般方法
*/
class Father{
  constructor(name,age){  
    this.name = name;
    this.age=age;
    console.log(arguments);
  }
  //Father.tag
  //Father.sayFatherInfo()
  static tag=250;
  static sayFatherInfo(){console.log('Father info');}
  //Father.prototype.xxx
  syaHello(){
    console.log('hello:' ,this.name,this.age);
  }
}

/*
目前Father的结构
 new Father()
    tag:250
    sayFatherInfo:f(){}
    prototype--------------Father.prototype
      -constructor:Father
      -syaHello:f(){}
      -prototype----------------Father.prototype.__proto__ ===Object.prototype//true
        --constructor:Object
        --toString:f(){}
*/
//console.log(Father.prototype.constructor);//返回class内的字符代码


class Son extends Father{
  constructor(x,y,z){
    super(x,y);// Father.call(this,x,y)//x,y是Father的构造函数需要的参数
    this.z=z;
  } 
  static sonInfo=250;
}

let son1 = new Son('bb',44,33);
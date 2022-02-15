//1.named data properties
  // 格式 key-value
  // 调用姿势  . 或者 []

//2. named accessor properties
  // 格式 getter setter
  // 调用姿势 在对对象的属性进行获取或者设置的时候，会自动调用。


//3. internal properties
  //所有对象共有 12种，其他的对象可能还有自己的特有 内部属性
  //内部属性是干嘛用的？  用来控制对象本身的行为的。
  //调用时机---在进行相应的操作的时候会自动调用
  //  格式 [[xxx]]
  //  使用姿势   不能直接调用，需要通过Object  的特殊方法来调用
  // 具体介绍如下
//3.1 [[Prototype]]
  //这个属性就是在使用 function穿件对象的时候，function.prototype中的属性
  //不严谨的写法 function.prototype = [[Prototype]]
  //在创建出来的实例对象中是不能直接调用的 
  //可以使用Object.getPrototypeOf() 来调用
  //例
  function Car(){};
  Car.prototype = {color:'red'};
  var car = new Car();
  //car 不能直接调用 [[Prototype]]，首先语法上就不支持 car.[[Prototype]]
  //使用Object.getPrototypeOf()
  console.log(typeof car.prototype);//undefined
  console.log(Object.getPrototypeOf(car));//{color: 'red'}

  //还有一种 调用方式  __proto__
  console.log(car.__proto__);//{color: 'red'}


  //3.2 [[Class]]
    //作用:返回对象的类型
    //在使用toString()方法时会自动获取[[Class]]的值
    //  注： Object.prototype.toString()方法默认返回的数据格式是  [object [[Class]]],这样子的字符串，[[Class]]会自动返回对应的结果
    // 但是 ES的一些内置对象重写了 toString方法，所以返回的结果可能不一样（例如Date、Array等...）
    //好在浏览器的宿主对象并没有重写toString,所以可以在浏览器中调用它们的toString来获取[[Class]]的值
    function log(msg){
      console.log(msg);
    }
    console.log(window.toString());//[object Window]
    console.log(document.toString());//[object HTMLDocument]
    console.log(navigator.toString());//[object Navigator]

    //自己创建的object类型的对象默认都是属于 Object类型
    //不想使用内置对象重写的toString方法，即强制使用Object.prototype.toString()，我们可以这么干
    //使用 逆向调用的方法  call/apply
    //例如
    var obj = {name1:'Tiki'};
    function logName(){
      console.log(this.name1);
    }
    //正常obj是无法调用logName这个方法的
    logName(obj);//undefined
    //使用逆向调用
    logName.call(obj);//Tiki
    logName.apply(obj);//Tiki



    //3.3 [[Extensible]]
    //作用：标示对象是否可以扩展（即是否可以增删属性）,默认为true
    //使用时机： 创建对象时自动调用
    // 获取[[Extensible]]的返回值： Object.isExtensible
    //可以修改：Object.preventExtensions = false,一旦修改为false就再也改不回去了
    var obj = {};
    console.log(Object.isExtensible(obj));//true
    obj.age=666;
    //修改
    Object.preventExtensions(obj);
    console.log(Object.isExtensible(obj));//false
    console.log(obj.age);

    





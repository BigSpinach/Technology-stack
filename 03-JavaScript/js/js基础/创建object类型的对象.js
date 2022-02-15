// 1. {}
//   创建
var obj= {
  a:1,
  innerObj:{
    a:6,
    b:2
  },
  logA:function(){
    console.log(this.a);
  }
}

//  调用
console.log(obj.a);//1
console.log(obj.innerObj.a);//6
obj.logA();//1


// 2. new Fn()


//3. Object.create(prototype,[propertiesObject])
var obj = Object.create({type:'by crate'},{
  color:{
    value:'red',
    writable:false
  },
  size:{
    value:666,
    enumerable:true
  }
});

console.log(obj.type);//by crate
console.log(obj.color);//red
console.log(obj.size);//666



//特别的
//使用{} 和 function创建的对象
var baseObj = {};
function Fn(){};
var functionObj = new Fn();

//可以使用 Object.property属性对象中的属性
console.log(baseObj.toString());//[object Object]
console.log(functionObj.toString());//[object Object]

//如果将 Object.prototype 设置为null
Object.prototype=null;//这句话是不生效的！
console.dir(Function.prototype);
console.log(baseObj.toString());//[object Object]
console.log(functionObj.toString());//[object Object]


//使用Object.create(null)创建的对象
var createObj = Object.create(null);
console.log(createObj.toString());
// 报错createObj.toString is not a function at <anonymous>


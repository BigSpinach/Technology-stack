//1. {}


//2. . 操作符


//3. Object.create(prototype,[propertiesObject])
//propertiesObject 实例的项上应有的属性

//4. Object.defineProperty() 和 Object.defineProperties()
var obj={};
Object.defineProperty(obj,'name',{
  value:'Tiki',
  configurable:true,
  writable:true,
  enumerable:true
})

Object.defineProperties(obj,{
  name:{
    value:'Tiger'
  },
  age:{
    value:2,
    configurable:false
  }
})
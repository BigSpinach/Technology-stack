
//深拷贝deepClone
const deepClone = (value,hash=new WeakMap)=>{
  //普通值，直接返回，--也叫函数的出口
  if(value==null) return value;
  if(typeof value!=='object') return value;
  if(value instanceof RegExp) return new RegExp(value);
  if(value instanceof Date) return new Date(value);

  //对象或者数组
  //创建一个对应的容器对象（目标对象），用于存储这个对象中对应的属性和值
  let instance = new value.constructor();

  if(hash.has(value)){
    return hash.get(value);
  }
  hash.set(value,instance);

  
  for(let key in value){
    instance[key]  = deepClone(value[key],hash);
  }
  return instance;
}

//test 
let arr = [10, [100, 200], {
  x: 10,
  y: 20
}];
let obj = {
  a: 100,
  b: [10, 20, 30],
  c: {
      x: 10
  },
  d: /^\d+$/
};

let obj_clone =deepClone(obj);
let arr_clone =deepClone(arr);
//修改obj_clone,arr_clone 看是否对原 obj ，arr产生影响
obj_clone.c.x=250;
arr_clone[2].x=250;
console.log(arr,obj);

console.log('------');
console.log(obj_clone,arr_clone);


//[ 10, [ 100, 200 ], { x: 10, y: 20 } ] 
//{ a: 100, b: [ 10, 20, 30 ], c: { x: 10 }, d: /^\d+$/ }
//------
//{ a: 100, b: [ 10, 20, 30 ], c: { x: 250 }, d: /^\d+$/ }
// [ 10, [ 100, 200 ], { x: 250, y: 20 } ]



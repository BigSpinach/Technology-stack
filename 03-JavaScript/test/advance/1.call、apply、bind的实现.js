//手动实现call、apply、bind
Function.prototype.call = function (obj,...args){
  //让fn执行 ，fn.call(obj,1,2)  this=>fn
  // this();

  //fn执行并传参
  // this(...args);

  //处理传入的obj 为null或者undefined
  if(obj==undefined){
    obj=window;
  }

  //修改fn中的this  也就是  让函数通过 obj.fn   的形式执行
  obj.tempFn = this;
  let result = obj.tempFn(...args);
  delete obj.tempFn;
  return result;
}

Function.prototype.apply = function (obj,args){
  //让fn执行 ，fn.call(obj,1,2)  this=>fn
  // this();

  //fn执行并传参
  // this(...args);

  //处理传入的obj 为null或者undefined
  if(obj==undefined){
    obj=window;
  }

  //修改fn中的this  也就是  让函数通过 obj.fn   的形式执行
  obj.tempFn = this;
  let result = obj.tempFn(...args);
  delete obj.tempFn;
  return result;
}

// /*  */


Function.prototype.bind = function (obj,...args){
  return (...args2)=>{
    return this.call(obj,...args,...args2)
  }
}




function fn(a,b){
  this.xxx=666;
  console.log(a,b,this);
}

fn(1,2);
console.log(xxx);//3  fn执行，this指向window this.xxx =3 即window.xxx=3

let obj = {
  name:'Tiki'
};

//目的： obj.fn(12,34)
fn.call(obj,12,34);// 让fn执行，并让函数中的this指向obj ,后边传递的是执行fn传递的实参
fn.apply(obj,[1,3]);// 跟call基本一致，传递实参的方式不一样

//特殊的情况 this指向window
fn.call(null,1,2); // this指向window
fn.call(undefined,1,2); //this指向window


//bind
console.log('---------bind----------');
fn.bind(obj)(1,3);//fn.bind(obj)  返回一个新函数
//1 3 {name: "Tiki", xxx: 666}


fn.bind(obj,3)(4,5);//3 4 {name: "Tiki", xxx: 666}

fn.bind(obj,8,9)(100,200);//8 9 {name: "Tiki", xxx: 666}


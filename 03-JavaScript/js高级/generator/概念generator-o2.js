/*
  Generator对象上的 throw和return方法

  throw 方法用于在 GF外部给GF内部抛出一个异常
    GF内部通过try-catch 接收这个异常
    使用了gf.throw('错误对象或描述') ，有返回值，返回一个{done:true} 这样子的对象

  return 
    方法用于 结束GF的分段执行
    gf.return('参数'); 
    return()执行返回一个 {value:'参数',done:true}结果对象
    同时，再次调用next方法，GF将不再向下执行。

*/

function* GF(params) {
  try {
    let a = yield params;
    console.log(a);
    let b = yield  params;
    console.log(b);
    let c = yield b + params;
    console.log(c);
  }catch(e){
    console.log(`GF中捕获到外边传递的错误信息${e}`);
  }
}

let gf = GF(111);
gf.next('传啥都没用，因为到第一个yield就停止了');
gf.next(222);//不传值就使用的是GF中的原语句了，b=a+params

/*
  GeneratorFunction  生成器函数
  
  Generator  生成器

  生成器返回结果是一个 IteratorResult


生成器函数 干什么用的？
生成一个生成器对象，用这个生成器对象控制生成器函数分段执行。
用gf 控制 GF分段执行
  如何分段执行？  
    GF中添加yield命令来控制分段
  分段后如何进入下一段？
    gf调用next方法，
    gf.next()会返回一个IteratorResult
*/

/*
  定义 GeneratorFunction  生成器函数
  function * GF(){}
  或者
  let GF = function*(){}
*/

/*
  获得 Generator对象
  let gf =  GF();
*/

/*
  Generator 对象上的next方法
  gf调用next方法有返回值，返回值是一个IteratorResult对象
  next可以传参。 传参的目的是修改原GF函数中的语句的原本返回值
  例如 GF中
  let b = yield 456;  
  console.log(b);
  
  原意是 b=456 ,
  此时如果给gf.next(888);
  则会修改为 b=888;
  次时再次调用next方法，会继续执行下边的console语句，
  此时打印的b就是传递进来的 888了----即修改了原语句的返回结果。
*/










function* GF() {
  //使用yield控制分段
  let a = 555;
  console.log(a);
  let b = yield a + 999;
  console.log(b);
  //通过next传参 next(888),可以修改b=a+999的结果，
  //即  b = 888

}

let gf = GF();
//console.log(gf);//Object [Generator] {}

//使用 Generator对象的next方法，控制GeneratorFunction的执行
// next方法有返回值，返回一个IteratorResult对象
let returnNext = gf.next(888); //{value: 123, done: false}
// next方法执行后返回一个 迭代器结果对象 IteratorResult
console.log(returnNext, 123);
gf.next(888);
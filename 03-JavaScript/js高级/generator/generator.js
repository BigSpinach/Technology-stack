//生成器函数在执行时能暂停，后面又能从暂停处继续执行。
/*
调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （ iterator ）对象。当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，yield 后紧跟迭代器要返回的值。或者如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。
*/

/*
next()方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。

调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield语句左边的变量，例如下面例子中的 x ：
*/

function* read() {
  yield 1;
  yield 2;
  yield 3;
}

let it = read();
console.log(it); //Object [Generator] {}
console.log(it.next()); //{ value: 1, done: false }
console.log(it.next()); //{ value: 2, done: false }
console.log(it.next()); //{ value: 3, done: false }
console.log(it.next()); //{ value: undefined, done: true }


//应用 将类数组转换为数组
console.log([ // 
  ...{
    0: 1,
    1: 2,
    2: 3,
    length: 3,
    [Symbol.iterator]: function* () {
      let index = 0;
      while (index !== this.length) {
        yield this[index++];
      }
    }
  }
]);

// function * read(){
//     try{
//         let a = yield 1;
//         console.log(a)
//         let b = yield 2;
//         console.log(b)
//         let c = yield 3;
//         console.log(c)
//     }catch(e){
//         console.log('e:'+e);
//     }
// }
// let it = read();
// console.log(it.next('xxx')) // {value:1.done:false} 第一次next参数没有任何意义
// it.throw('xxx')



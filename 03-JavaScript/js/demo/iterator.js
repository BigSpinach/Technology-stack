/*
概念： iterator 是一种接口机制，为各种不同的数据结构提供统一的访问机制
作用：
  1、为各种数据结构，提供一个统一的、简便的访问接口；
  2、使得数据结构的成员能够按某种次序排列
  3、ES6创造了一种新的遍历命令 for...of循环，Iterator接口主要供for...of消费。
工作原理：
  - 创建一个指针对象(遍历器对象)，指向数据结构的起始位置。
  - 第一次调用next方法，指针自动指向数据结构的第一个成员
  - 接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员
  - 每调用next方法返回的是一个包含value和done的对象，{value: 当前成员的值,done: 布尔值}
    * value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。
    * 当遍历结束的时候返回的value值是undefined，done值为false
原生具备iterator接口的数据(可用for of遍历)
  1、Array
  2、arguments
  3、set容器
  4、map容器
  5、String
  。。。
*/

//Symbol.iterator

function iteratorBase(target) {
  let index = 0;
  return {
    next() {
      //return {value:'xx',done:false};
      //return {value:target[index++],done:false};
      return index < target.length ? {
        value: target[index++],
        done: false
      } : {
        value: target[index++],
        done: true
      };
    }
  }
}

let arr = [1, 2, 3];

let iteratorObj = iteratorBase(arr); //{value:'xxx',done:true}
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());


console.log('-------------')
//可以遍历对象的iterator
function myIterator() {
  let index = 0;
  let that = this; //this->当前调用 myIterator这个方法的对象
  return {
    next: function () {
      //判断this是对象还是数组
      if (that instanceof Array) {
        return index < that.length ? {
          value: that[index++],
          done: false
        } : {
          value: that[index++],
          done: true
        }
      } else if (that instanceof Object) {
        let keys = Object.keys(that);
        return index < keys.length ? {
          value: that[keys[index++]],
          done: false
        } : {
          value: that[keys[index++]],
          done: true
        }
      }
    }
  }
}


// let arr2=[1,2,3];
//修改数组原型上的默认迭代器
// Array.prototype[Symbol.iterator] = myIterator;
// for(let item of arr2){
//   console.log(item);
// }

let obj = {
  userName: 'BigSpinach',
  userAge: 18
}
// console.log(Object.keys(obj));//[ 'userName', 'userAge' ]
//给Object原型上添加迭代器方法
Object.prototype[Symbol.iterator] = myIterator;
for (let val of obj) {
  console.log(val);
}


console.log('-----------------');
//myIterator2
function myIterator2() {
  let index = 0; //指针
  let that = this;
  let keys = Object.keys(this);
  return {
    next: function () {
      if (that instanceof Array) {
        return index < that.length ? {
          value: that[index++],
          done: false
        } : {
          value: that[index++],
          done: true
        };
        
        //done 为true,底层调用iterator接口next方法的行为就停止
      } else if (that instanceof Object) {
        return index < keys.length ? {
          value: that[keys[index++]],
          done: false
        } : {
          value: that[keys[index++]],
          done: true
        };
      }
    }
  }
}
//test
let arr3 = [12, 3, 4, 5];
Array.prototype[Symbol.iterator] = myIterator2;
for (let item of arr3) {
  console.log(item);
}
//new的原理
/*
  new的特点
  1.返回一个实例对象
  2.这个实例对象的__proto__指向所属类的原型（FN.prototype）
  3.如果类（特指构造函数）中返回了一个引用地址（object或者array），则将这个引用地址作为返回的实例对象
*/
function A() {
  this.a = 10;
  return [1,23,3]
};
A.prototype.say = () => {
  console.log('say(A)');
}

const mockNew = (F) => {
  const obj = {};
  let returnVal = F.call(obj); //拿到私有
  //如果有返回一个引用地址的值，就将这个引用地址作为结果对象返回
   if((typeof returnVal ==='object'&&returnVal!==null)||typeof returnVal ==='function'){
     return returnVal;
   }
  obj.__proto__ = F.prototype; //拿到 公有属性和方法
  return obj;
}

const a = mockNew(A);
const a2 = new A();
console.log(a, a2);
// a.say(); //say(A)

console.log(typeof []);//object

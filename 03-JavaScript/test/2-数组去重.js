var ary = [1, 2, 3, 2, 2, 3, 4, 3, 4, 5];
//1.基于双for去重
//核心：利用数组删除方法splice，删除掉重复项
const myUniqueWith2for = (arr) => {
  // let ary=arr;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      if (item === arr[k]) {
        arr.splice(k, 1);
        k--
      }
    }
  }
  // return ary;
  return arr;
}
let result = myUniqueWith2for(ary);
console.log(result);

//2. 对象属性名不重复,利用arr.length--的方式删除重复项
const myUnique = (arr) => {
  //不使用splice，因为splice删除当前项，后续索引需要重新计算耗性能。
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof obj[item] !== 'undefined') { //说明重复了
      //用数组的最后一项替换掉当前项
      arr[i] = arr[arr.length - 1];
      arr.length--;
      i--;
      // continue;
    }
    obj[item] = item;
  }
  return arr;
}
var ary = [1, 2, 3, 2, 2, 3, 4, 3, 4, 5];
let result2 = myUnique(ary);
console.log(result2);


//3. 方案三：`使用indexOf()` 不兼容IE6~8
let ary = [1, 23, 4, 5, 6, 7, 2, 12, 3, 5, 6];
for (var i = 0; i < ary.length; i++) {
  let cur = ary[i];
  let next = ary.slice(i + 1);
  if (next.indexOf(cur) > -1) {
    ary.splice(i, 1);
    i--;
  }
}
console.log(ary); //[ 1, 23, 4, 7, 2, 12, 3, 5, 6 ]

//4. 相邻比较
/*
    1>. 先对数组进行排序
    2>. 对排序后 的数组进项相邻元素比较，如果相同，删除一个
 */
Array.prototype.myUnique = function myUnique() {
  //1.先排序
  let arr = this.sort((a, b) => a - b);
  //2.相邻比较
  for (var i = 0; i < arr.length - 1; i++) {
    //let cur =arr[i];
    //let nextCur = arr[i+1];
    //if(cur==nextCur){
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
      continue;
    }
  }
  return arr;

}

let arr = [1, 2, 4, 5, 6, 1, 2, 3, 4, 5, 2, 63];
console.log(arr.myUnique()); //[ 1, 2, 4, 5, 6, 3, 63 ]


//5. 基于ES6的set数据结构
Array.prototype.myUnique = function myUnique(){
	return  Array.from(new Set([...this]));
}

let arr = [1,2,4,5,6,1,2,3,4,5,2,63];
console.log(arr.myUnique());//[ 1, 2, 4, 5, 6, 3, 63 ]

//6.forEach方法去重
Array.prototype.distinct=function (){
	var a=[],obj={},temp=this;
	temp.forEach(function (value, index, temp){
		if(!obj[typeof (value)+value])	{
			a.push(value);
			obj[typeof (value)+value]=true;
		}	
	});	
	return a;
};


//for循环
// for(let i=0;i<10;i++){
//   for(let k=0;k<10;k++){
//     for(let j=0;j<10;j++){
//       // console.log(j*100+k*10+i);
//       console.log(100*i+10*k+1*j);
//     }
//   }
// }


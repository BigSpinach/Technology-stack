/*
  arr = [1,2,2,2,2,3,4,5,6,7,8,5,3,4,32];
  targetAry = [1,2,3,4,5,6,7,8,32];
*/
/*
  1.基于双for去重
*/
let arr = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 5, 3, 4, 32];

function removeRepetition(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //拿到第一个项（当前项）
    let item = arr[i];
    //与当前项的后一项比较，再后+++
    for (let k = i + 1; k < arr.length; k++) {
      if (item === arr[k]) {
        //arr 删除k索引位置的值，此时arr发生改变，下一次比较的时候，arr的长度会 - 1
        //so 需要 k--
        arr.splice(k, 1);
        k--;
      }
    }
  }
}
removeRepetition(arr);
console.log(arr);


/*2. 利用对象属性名不重复的特性实现去重 */
function removeRepetition2(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    //把当前项存储到obj中
    let item = arr[i];
    //检测 当前项是在obj中  删除后一项
    if (typeof obj[item] !== 'undefined') {
      /*
      arr.splice(i,1);
      i--;
      */
      /*优化 */
      //将数组最后一项与当前重复项替换，并删除数组中最后一项
      arr[i] = arr[arr.length - 1];
      arr.pop(); //arr.length--;
      i--;
    }

    obj[item] = arr[i];
  }
};

let arr2 = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 5, 3, 4, 32];
removeRepetition2(arr2);
console.log(arr2);

/*3. 使用forEach */
function removeRepetition3(arr) {
  let target = [],
    obj = {};
  arr.forEach((item) => {
    if (!obj[typeof item + item]) {
      target.push(item);
      obj[typeof item + item] = true;
    }
    obj[typeof item + item] = true; //"number1"...
    console.log(obj);
  });
  return target;
}
let arr3 = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 5, 3, 4, 32];

console.log(removeRepetition3(arr3));
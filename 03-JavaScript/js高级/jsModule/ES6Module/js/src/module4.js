/*
  混合导出 = 分别导出+统一导出+默认导出
   

*/

//分别导出
export let name5 = 'module4-name';


export let arr5 = [12,3,4,5,6,8];

export let moduleObj5 = {name:'module5'};

console.log('module4中的 log语句');


let name4 = 'module1-name';


let arr4 = [12, 3, 4, 5, 6, 8];

let moduleObj4 = {
  name: 'module4'
};

console.log('module4中的 log语句');

export {
  arr4,
  name4,
  moduleObj4
}


export default {
  age: 999,
  say() {
    console.log('说话-混合');
  },
  arr3: [1, 3, 2, 4, 5, 3, 2, 9, 6, 6,888,'ssss']
};
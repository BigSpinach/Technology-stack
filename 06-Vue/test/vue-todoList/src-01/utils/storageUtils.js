//localStorage 数据存取的工具模块

// 统一暴露
/*
module.exports={//为啥不用[]  方法名要有一个标识名称
  savePlans(){},
  getPlans(){}
}
*/

//分别暴露
//根据要保存数据名称，创建本地数据存储，名称为 数据名称_key

export function savePlans(plans) {
  //export function savePlans(plans){
  //localStorage.setItem('plans_key',plans); 
  // localStorage.setItem(value+'_key',value);
  // let str = value + '_key';
  localStorage.setItem('plans_key', JSON.stringify(plans));
}

//未解之谜
// export function savePlans(value) {
//   //取value名字的字符串
//   //暂时想不到，未解之谜 
//   console.log(String(value));
//   localStorage.setItem(value + '_key', JSON.stringify(value));
// }

//根据已保存的数据名称，数据名称_key 获取已保存的数据
// export const getPlans = () => JSON.parse(localStorage.getItem('plans_key'))||[];
//export const getPlans = () => JSON.parse(localStorage.getItem('plans_key')||'[]');
// export const getPlans = (str) => JSON.parse(localStorage.getItem(str+'_key')||'[]');
export const getPlans = (str) => {
  // console.log(str+ '_key');
  return JSON.parse(localStorage.getItem(str + '_key') || '[]')
}
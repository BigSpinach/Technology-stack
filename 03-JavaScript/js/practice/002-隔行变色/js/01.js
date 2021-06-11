//获取 目标元素li列表
let textBox = document.getElementsByClassName('textBox');
let lis = textBox[0].getElementsByTagName('li');
/*使用js循环控制css样式的显示 */

for (let i = 0; i < lis.length; i++) {
  const element = lis[i];
  if(i%2==0){
    lis[i].style.backgroundColor = "red";
  }
  
}
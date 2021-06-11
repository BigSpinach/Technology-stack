//获取元素
let tabBox = document.getElementsByClassName('tabBox');
let lis = tabBox[0].getElementsByTagName('li');
let divs = tabBox[0].getElementsByTagName('div');

//给 li绑定事件 
for (let i = 0; i < lis.length; i++) {
  let item = lis[i];
  let itemDiv = divs[i];
  //给每个li添加自定义属性，用于存储自己的索引 
  lis[i]['my_index'] = i;
  divs[i]['my_index'] = i;
  lis[i].onclick = function () {
    changeTab(this.my_index);
  }
}

function changeTab(n) {
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
    divs[i].className = "";
  }
  lis[n].className = "active";
  divs[n].className = "active";
}
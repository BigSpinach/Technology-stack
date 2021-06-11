/*使用 闭包的特性 保存住每次点击的索引 */
var tabBox = document.getElementsByClassName('tabBox');
var lis = tabBox[0].getElementsByTagName('li');
var divs = tabBox[0].getElementsByTagName('div');

//循环，给每一个 li绑定点击事件 
for (var i = 0; i < lis.length; i++) {

  //给当前点击的li绑定事件
  (function (i) {
    lis[i].onclick = function () {
      console.log(i);
      //循环遍历清除所有的active样式 
      for (var j = 0; j< lis.length; j++) {
        //清空所有样式
        lis[j].className = "";
        divs[j].className = "";
      }
      lis[i].className = "active";
      divs[i].className = "active";
    }
  })(i);

}
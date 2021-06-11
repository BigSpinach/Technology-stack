/*
  思路：点击哪个选项卡，让哪个选项卡拥有active样式，其他的样式设置为空
  */
  /*给所有的li绑定点击事件*/
  let tabBox = document.getElementsByClassName('tabBox');
  let lis = tabBox[0].getElementsByTagName('li');
  let divs = tabBox[0].getElementsByTagName('div');

  for (let i = 0; i < lis.length; i++) {
    // lis[i].className = "";
    // divs[i].className = "";
    lis[i].onclick = function () {
      changeTab(i);
      // console.log(i);
      // lis[i].className = "active";
      // divs[i].className = "active";
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
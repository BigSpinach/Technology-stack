let productModeRender = (function () {
  let productData = null;
  let productList = null;
  //获取目标容器
  let commoditiesBox = document.querySelector('.container>.commodities');
  //从服务端获取数据 
  let getData = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      xhr.readyState === 4 && xhr.status === 200 ? productData = JSON.parse(xhr.responseText) : null;
    }
    xhr.open('GET', './json/product.json', false);
    xhr.send(null);
  }


  //绑定到页面
  let bindHTML = function () {

    let str = ``;
    productData.forEach(({
      img,
      hot,
      price,
      time,
      title
    }) => {
      str += `<div class="goods_item" data-time="${time}" data-hot="${hot}" data-price="${price}">
     <div class="goods_img">
       <a href="javascript:;"><img src="${img}" alt=""></a>
     </div>
     <div class="goods_info">
       <p title="${title}">${title}</p>
       <span>￥ ${price}</span>
     </div>
   </div>`;
    });

    //拼接到页面
    commoditiesBox.innerHTML = str;
    //重新获取页面中的 产品列表
    productList = document.querySelectorAll('.commodities>.goods_item');

  }



  //操作数据行为
  //根据点击的行为，进行不同的排序方式
  let sortArr = function () {
    let linkList = document.querySelectorAll('.container>.top_bar a');
    //循环遍历 linkList 中的每一个 a
    //为每一个a 绑定点击事件
    linkList.forEach((item, index) => {
      //console.log(this);//window 箭头函数指向上级作用域
      item.flag = -1;
      item.onclick = function () {
        this.flag *= -1;
        let ary = ['data-price', 'data-hot', 'data-time'];
        productList = [].slice.call(productList);
        productList.sort((a, b) => {
          //如果点击的是价格，让productData按照 价格顺序排序
          //linkList[0]
          let aInner = a.getAttribute(ary[index]);
          let bInner = b.getAttribute(ary[index]);
          if (index === 2) {
            //说明是 2018-08-08 
            //需要转换成 20180808
            aInner = aInner.replace(/-/g, '');
            bInner = bInner.replace(/-/g, '');
          }
          return (aInner - bInner) * this.flag;

        });

        //将排序后的数据重新添加到页面
        //=>基于文档碎片减少DOM回流
        let frg = document.createDocumentFragment();
        productList.forEach(curLi => {
          frg.appendChild(curLi);
        });
        commoditiesBox.appendChild(frg);
        frg = null;

      }


    });
  }

  return {
    init: function () {
      getData();
      bindHTML();
      sortArr();
    }
  }
})();

productModeRender.init();
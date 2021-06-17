//获取要操作的元素
//获取 产品容器盒子
let container = document.getElementsByClassName('container')[0];
let commodities = container.getElementsByClassName('commodities')[0];
//获取产品列表
let goodsList = container.getElementsByClassName('goods-item');
//获取排序容器
let top_bar = container.getElementsByClassName('top_bar')[0];
//获取点击按钮 列表
let linkList = top_bar.getElementsByTagName('a');
//linkList[0].onclick...

//console.log(linkList, goodsList);



//动态获取数据
let productData = null;

function getProducts() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      productData = JSON.parse(xhr.responseText);
    }
    // xhr.readyState === 4 && xhr.status === 200 ? productData = JSON.parse(xhr.responseText):null;
  }
  xhr.open('GET', './json/product.json', false);
  xhr.send(null);
  //return productData;
};
getProducts();

//转换成数组，并进行排序操作
//根据价格实现排序
let flag = 0; // 0表示升序，1表示降序
function sortPrice(data) {


  if (flag == 0) {
    data.sort((a, b) => {
      return a.price - b.price;
    });
    flag = 1;
  } else {
    data.sort((a, b) => {
      return b.price - a.price;
    });
    flag = 0;
  }
};

//sortPrice(productData);


//根据 热度排序
function sortHot(data) {


  if (flag == 0) {
    data.sort((a, b) => {
      return a.hot - b.hot;
    });
    flag = 1;
  } else {
    data.sort((a, b) => {
      return b.hot - a.hot;
    });
    flag = 0;
  }
};

//sortHot(productData);

//根据发布时间 进行排序
function sortTime(data) {
 
  if (flag == 0) {
    data.sort((a, b) => {
      return timeStringToNumber(a.time) - timeStringToNumber(b.time);
    });
    flag = 1;
  } else {
    data.sort((a, b) => {
      return timeStringToNumber(b.time) - timeStringToNumber(a.time);
    });
    flag = 0;
  }
};

//sortTime(productData);

//当点击不同按钮触发不同排序函数
linkList[0].onclick = () => {
  sortTime(productData);
  bindHTML(productData);
};
linkList[1].onclick = () => {
  sortHot(productData);
  bindHTML(productData);
};
linkList[2].onclick = () => {

   //排序
   sortPrice(productData);
   //重新添加到页面
   bindHTML(productData);
};




//将排序后的数据动态添加到页面
function bindHTML(data) {
  let str = ``;
  for (let i = 0; i < data.length; i++) {
    let {
      title,
      img,
      price
    } = data[i];
    /* {
    "id": 1,
    "title": "HUAWEI Mate 10 4GB+64GB 全网通版（亮黑色）",
    "price": 3899,
    "time": "2017-03-15",
    "hot": 198,
    "img": "img/1.jpg"
  },*/
    str += ` <div class="goods-item">
    <div class="goods-item_cover">
      <a href="javascript:;">
        <img class="goods-item_img" src="${img}">
      </a>      
    </div>

    <div class="goods-item_info">
      <p>${title} </p>
      <span>￥ ${price}</span>
    </div>
  </div>
`;
    //添加到页面
    commodities.innerHTML = str;
  }
}
bindHTML(productData);



//把时间字符串转为纯数字串
//2017-08-08  =>   20170808
function timeStringToNumber(str) {
  return Number(str.split('-').join(''));
}
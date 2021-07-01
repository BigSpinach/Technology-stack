/*
  需求：将url？传参后的数据转换成对象存储使用
  url ='https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&ch=7'
  结果：
  { 
		ie: 'utf-8',
  		f: '8',
  		...
  	}
*/
function queryURLParameter(url) {
  let target = {};
  //第一步：根据 ? 位置，获取？后的字符串
  let index = url.indexOf("?") + 1;
  let newStr = url.slice(index);
  //第二步： 根据 & 符号，将新字符串拆分成 a=b的形式
  let arr = newStr.split('&');
  // console.log(arr);
  //第三步：根据 = 切割 ，得到多个含有2个元素的数组arr，
  //并创建 obj对象 ，使得 obj[arr[0]]=arr[1]
  for (let i = 0; i < arr.length; i++) {

    let newArr = arr[i].split('=');

    console.log(newArr);
    target[newArr[0]] = newArr[1];
  }
  return target;
}

let url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&ch=7';
queryURLParameter(url);
/*正则匹配url */
{
  let url = 'http://202.110.112.57/wgdcnccdn.inter.qiyi.comn?name=xx&age=12#ss';

  //使用正则 
  //   /非 ?&=#开头字符 = 非 ?&=#开头字符/
  let reg = /([^?=&#]+)=([^?=&#]+)/g;

  let result = reg.exec(url);
  console.log(result);

  let obj = {};
  url.replace(reg, function () {
    obj[arguments[1]] = arguments[2] || null;
  });
  console.log(obj);
}

//`let str='hello<img src="haha.png" alt="哈哈"/>world';`
//正确匹配输出’hello[哈哈]world’
{
  let str='hello<img src="haha.png" alt="哈哈"/>world';
  let reg=/<img.+alt=(?:'|")(.*)(?:'|")\/>/g;//匹配img标签
  let result =str.replace(reg,(...arg)=>{
    return `[`+arg[1]+`]`;//将大正则替换成 小正则中的内容,并用[] 包起来
    //return `[${arg[1]}]`//es6模板字符串 变量的使用
  });
  console.log(result);
}
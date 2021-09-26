//通过node实现一个http服务
//node本身没有这些功能，都是通过核心模块来提供
// http模块


const http = require('http');
const url =require('url');


let server = http.createServer();

//监听解析request
server.on('request',(request,response)=>{
  //request 客户端
  //response 服务端
  //1. 请求
  // console.log(request);//包含了请求的所有信息
  
  // 1)请求行
  console.log(request.method);//GET
  //console.log(request.url);// / 首页
  //一个完整的url
  //http://username:passworld@www.baidu.com:80/xxx?limit=30&offset=1#666

  // 地址栏请求的地址为 http://127.0.0.1:3001//xxx?limit=30&offset=1#666
  //console.log(request.url);//  返回结果 //xxx?limit=30&offset=1
  let {pathname,query} =url.parse(request.url,true);
  console.log(pathname,query);//  /xxx [Object: null prototype] { limit: '30', offset: '1' }

  //2) 请求头  都是小写
  //console.log(request.headers);

  //3) 获取请求体
  let arr=[];
    request.on('data',(chunk)=>{
      arr.push(chunk)
      console.log('data');//不一定出发， push(null)
    });
    request.on('end',()=>{
    console.log('end');//end方法一定会触发
    })


    //2. 响应
    response.statusCode=404;//设置响应状态码
    // response.setHeader('Content-Length','1');//设置响应头
    // response.setHeader();//有默认值，自己去计算，不用写这行代码
    // response.end('end') ;
    //设置mime
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.end('中文乱码') ;


});

//开启一个端口号
let port =3000;
server.listen(port,()=>{
  console.log('listen port at '+port);
})

//端口号被占用 自动加1
server.on('error',err=>{
  // console.log(err);
  if(err.errno==='EADDRINUSE'){
    server.listen(++port);
    //这里不需要再次编写 listen中的回调，它默认会再次执行第一次listen中写的回调函数
    //内部通过 on('start',callback)  来实现的
  }
})

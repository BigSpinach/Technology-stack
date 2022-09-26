const { log } = require('console');
const http = require('http');
//http.createServer(callback) 创建一个服务器对象
let server = http.createServer(function(request,response){
  //console.log(request);
  // response.end('OK');
  //响应之前需先设置响应内容的基础配置 专业术语叫 响应头 responseHeader
  response.setHeader('content-type','text/html;charset=utf8');
  response.end('<h1 style="font-size:99px">数据库</h1>');

})

// console.log(http);

server.listen(3000,err=>{
  if(err)console.log(err);
  else console.log('启动成功，端口号3000');
})
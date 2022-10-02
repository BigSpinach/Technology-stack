const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  let serverData = [1, 23, 456]; //服务端数据
  //需要配合前端，查看前端定义的函数  demo
  //将数据通过函数传参的形式传递给前端
  res.send('demo(' + JSON.stringify(serverData) + ')')
});

app.get('/test2', (req, res) => {
  //服务端数据
  let serverData2 = {
    name: 'zs',
    age: 18,
    data: [1, 23, 456]
  };
  //服务端定义并传参
  let fn = function (serverData2) {
    return serverData2
  }
  //需要配合前端，查看前端定义的函数  demo
  //将数据通过函数传参的形式传递给前端
  let str = JSON.stringify(serverData2);
  res.send('window.abc = ' + JSON.stringify(fn(serverData2)));
  //  res.send('window.abc=123');
});

app.get('/test3',(req,res)=>{
  //解析前端请求参数
  let {callback} = req.query;
  let serverData3 = {
    name: 'zs',
    age: 18,
    data: [1, 23, 456]
  };
  res.send(`${callback}(${JSON.stringify(serverData3)})`)
})

app.listen(3000, err => {
  if (!err) console.log('服务启动成功');
  else console.log(err);
});
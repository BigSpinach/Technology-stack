/*
使用express 搭建一个后台服务器（路由）
安装 ： npm install express 
*/
const axios = require('axios');
const express = require('express');

const app = express();
// console.log(app);

//注册后台路由
app.get('/test/:q', (req, res) => {
  // console.log(req,res);
  //这个路由是转发请求的操作
  const q = req.params.q;
  // console.log(q);
  axios({
    method: 'GET',
    url: 'https://api.github.com/search/repositories',
    params: {
      q,
      sort: 'stars'
    }
  }).then(response => {
    // const result = response.data.items[0];
    const {
      name,
      html_url
    } = response.data.items[0];
    console.log( name,
      html_url);
    res.send({
      status: 0,
      data: {
        name,
        html_url
      }
    })
  })
})


app.listen('6060', () => {
  console.log('server 启动成功,端口号6060',);
});
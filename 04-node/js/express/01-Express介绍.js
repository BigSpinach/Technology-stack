/**
 * Express是
 * 基于 Node.js 平台，快速、开放、极简的 Web 开发框架
 */


const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  //回调函数中传递了请求和响应对象
  res.send('OK')
})

app.listen('3000',err=>{
  if(err) console.log(err);
  else console.log('listen at port 3000');
})
const express = require('express');
//body-parser 用于解析post请求发过来的urlencoded格式的数据，解析为一个对象并 挂载到request对象身上。（body-parser 这个函数会自己处理这些事，大致原理就是获取请求体，然后解析并给request对象添加属性）
const bodyParser = require('body-parser');

const app = express();


//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/',(req,res)=>{
  res.send('OK')
})
app.post('/test',(req,res)=>{
  //console.log('post-ok');
  res.send(req.body);
})

app.listen('3000',err=>{
  if(err) console.log(err);
  else console.log('listen at port 3000');
})

const express = require('express');

const app = express();
const PORT = 3000;

/*
  使用函数的形式按需 插入应用级中间件
  例如本例中，只有图片需要做防盗链，那么只需要对图片进行中间件拦截即可
  //express底层是在处理请求路径的时候，允许插入一个应用级函数的形式来做这件事
  例如： app.get('/img',【中间件函数】，(req,res)=>{...})
*/
function doorChain(req,res,next){

  if (req.get('Referer')) {
    console.log(req.get('Referer'));
    //判断Referer的地址
    if (req.get('Referer').split('/')[2] === '127.0.0.1:3000') {
      next();
    } else {
      //非本站发出的请求，做出提示
      res.sendFile(__dirname + '/public/imgs/err.webp');
    }

  } else { //没有Referer字段，则说明是本站发出的请求，直接放行
    next();
  }
}

app.get('/', (req,res) => {
  res.send('ok');
});

app.get('/demo', (req,res) => {
  res.send('DEMO');
});

// 按需引入应用级中间件
app.get('/img',doorChain, (req,res) => {
 
  res.sendFile(__dirname+'/public/imgs/logo.jpg');
});


app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log('服务启动成功，端口号为：' + PORT);
})


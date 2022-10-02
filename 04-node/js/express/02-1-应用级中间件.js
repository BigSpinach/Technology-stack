const express = require('express');
const app = express();


//应用级别的中间件，全局拦截作用（但是，express在做全局拦截的时候是根据代码书写顺序走的，写在后边稍后做全局拦截 ）【猜测：express底层使用一个数组push了这些请求路径的顺序】

app.use((req, res, next) => {
  //console.log(arguments);//有5个参数  {}，callback，Module,__filename,__dirname
  //防盗链
  if (req.get('Referer')) {
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

});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/imgs/logo.jpg');
})

app.get('/img', (req,res) => {
  res.sendFile(__dirname+'/public/imgs/logo.jpg');
});


app.listen('3000', err => {
  if (err) console.log(err);
  else console.log('listen at port 3000');
});
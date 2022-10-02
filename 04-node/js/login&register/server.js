const express = require('express');
const app = express();
//链接服务器
const db = require('./db/db.js');
const usersModel = require('./module/usersModel');

//禁止服务器返回X-Powered-By,  客户端就不知道服务器使用的是什么技术启动的服务了。
app.disable('x-powered-by');
app.use(express.static(__dirname + '/public'));
//使用express内置的 处理post请求的middleware
app.use(express.urlencoded({
  extended: true
}));

//如果数据库连接成功，随后立即启动服务器，在整个过程中，无论多少次请求，连接数据库的动作只发生一次。
db(() => { //数据库连接成功走这个callback
  app.get('/', (req, res) => {
    res.send('OK');
  });

  //UI路由
  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
  });
  //UI路由
  app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html')
  });

  //用于处理用户的登录请求（校验用户信息）
  app.post('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
  });
  //用于处理用户的注册请求（校验用户数据有效性）
  app.post('/register', (req, res) => {
    // res.sendFile(__dirname+'/public/register.html')
    // console.log(req.body);
    //需要对客户端发来的数据进行校验
    //接收客户端数据
    const {
      email,
      nick_name,
      password,
      re_password
    } = req.body;
    /*校验规则：
        1.校验通过
          去数据库中二次校验
            1.1 是否与数据库数据重复（已注册）
            1.2 未注册，写入数据库
        2.校验失败
          提示用户哪里不正确
    */

    //定义规则正则
    const emailReg = /^[a-zA-Z0-9_]{6,20}@[a-zA-Z0-9]{2,8}\.com$/ig;
    const nickNameReg = /[\u4e00-\u9fa5]/gm;
    const passwordReg = /^[a-zA-Z0-9_@$#.&]{6,18}$/;

    if (!emailReg.test(email)) {
      //邮箱不对
      res.send('邮箱格式不正确');
    } else if (!nickNameReg.test(nick_name)) {
      //昵称不合法
      res.send('昵称不合法，只能是中文');
    } else if (!passwordReg.test(password)) {
      //密码中有非法字符
      res.send('密码中有非法字符，不能有()^!空格？%+-*/\|<>,。，');
    } else if (password !== re_password) {
      //两次密码不一致
      res.send('两次密码不一致');
    } else { //客户端验证通过    
      //提交给服务器做后端校验
      //链接数据库的操作应该在做校验之前就链接，要不然会触发多次链接数据库的动作，对数据库不友好。
      //做数据库数据校验 ，需要借助 模型对象 
      //usersModel

      usersModel.findOne({ //查询结果返回的是一个document或document的数组
        email
      }, function (err, data) {
        if (data) {
          res.send('该邮箱已被注册！')
        } else {
          usersModel.create({
            email,
            nick_name,
            password,
            re_password
          }, function (err, data) {
            if(!err){
              res.send('注册成功');
            }else{
              console.log(err);
              res.send('我服务器没错，你网络有问题，一会儿之后再来注册。');
            }
          })
        }
      });

    }

  });

  app.listen(3000, err => {
    if (!err) console.log('服务启动成功');
    else console.log(err.massage);
  });


}, err => { ////数据库连接失败走这个callback
  //数据库连接失败
  console.log(err);

});
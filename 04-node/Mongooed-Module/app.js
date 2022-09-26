//操作数据库模块studentModel
const mongoose = require('mongoose');
//1. 引入数据库连接模块
const db = require('./db/db');
//2.引入 model对象模块
const studentModel = require('./module/studentsModel.js');
const teacherModel = require('./module/teachersModel.js');


//3. 操作数据库
//需要先判断数据库是否连接成功
db(function(err){
  if(err) console.log(err);
  else console.log('ok了');
  //下边就可以操作数据库了
  console.log(studentModel);
  console.log(teacherModel);
})



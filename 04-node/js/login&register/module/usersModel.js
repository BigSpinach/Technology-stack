// 用户模块模型对象
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId; //给这个Schema构造器函数绑定id标识

//创建字段的规则对象
const usersRule = new Schema({
  email: {
    type: String,
    required: true,
  },
  nick_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: 'Y'
  }
});

//将字段规则对象与集合建立连接,得到model对象
module.exports = mongoose.model('users', usersRule);
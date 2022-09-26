// 老师模块模型对象
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; //给这个Schame构造器函数绑定id标识

//创建字段的规则对象
const teachersRule = new Schema({
  teacher_id: {
    type: String, //限制学号必须为：字符串
    required: true,
    unique: true //独一无二的unique
  },
  name: {
    type: String, //限制姓名必须为：字符串
    required: true, //限制姓名为必填项
  },
  age: {
    type: Number, //限制年龄必须为：字符串
    required: true, //限制年龄为必填项
  },
  sex: {
    type: String, //限制性别必须为：字符串
    required: true, //限制性别为必填项
  },
  hobby: [String], //限制爱好只能为数组，数组中的每一项必须为字符串
  info: Schema.Types.Mixed, //接收所有类型
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
module.exports =  mongoose.model('teachers',teachersRule) ;
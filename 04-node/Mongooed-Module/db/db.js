/*
  连接数据库模块
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/demo');

module.exports = function connectMongoDB(callback) {
  mongoose.connection.on('open', function (err) {
    if (err) {
      console.log('数据库连接失败：' + err);
      callback(err);
    } else {
      console.log('数据库连接成功');
      callback();
    }
  })
}
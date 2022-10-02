/*
  连接数据库模块
*/
const mongoose = require('mongoose');

const DB_NAME = 'users';
const PORT = 27017;
const IP = 'localhost';



module.exports = function connectMongoDB(success,failed) {
  //1.连接数据库
  mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`);


  //2.绑定数据库连接的监听函数
  mongoose.connection.on('open', function (err) {
    if (err) {
      console.log('数据库连接失败：' + err);
      failed(err);
    } else {
      console.log('数据库连接成功');
      success();
    }
  })
}
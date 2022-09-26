const mongoose = require('mongoose');
// console.log(mongoose);
//mongoose.set('Use createIndexes',true); //以invalid （废弃）


// console.log(mongoose.Schema);

//使用mongoose可以连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/demo');//确定连接的是哪个数据库 这里是demo这个数据库


//console.log(mongoose.connection);


//给连接数据库的操作绑定监听
mongoose.connection.on('open',function(err){
  
  if(err) {
    console.log('数据库连接失败：'+err);
  }  else{
    console.log('数据库连接成功');
    //console.log('操作数据库');
    /**
     * 操作数据库需要准备的东西（从大往小的说）
     * *哪个数据库的那个集合中的哪些/个文档的数据
     * 1.确定数据库的名称
     * 2.确定集合的名称 
     *   ---- mongoose中用 mongoose.model('xx集合名')获取操作这个集合的对象
     * 3.确定集合中所有文档的规则【即表头字段的约束条件】
     *  ---- new mongoose.Schema({字段的配置})获取 Schema构造器函数的实例对象
     * 
     * 一般是先建立规则，然后再与对应的集合绑定关系。
     * 然后才是操作这个集合中的所有文档（即CRUD）。
     */

    const Schema=mongoose.Schema;
    const ObjectId=Schema.ObjectId;//给这个Schame构造器函数绑定id标识

    //创建字段的规则对象
    const studentsRule = new Schema({
      stu_id:{
        type:String, //限制学号必须为：字符串
        required:true,
        unique:true//独一无二的unique
      },
      name:{
        type:String, //限制姓名必须为：字符串
        required:true, //限制姓名为必填项
      },
      age:{
        type:Number, //限制年龄必须为：字符串
        required:true, //限制年龄为必填项
      },
      sex:{
        type:String, //限制性别必须为：字符串
        required:true, //限制性别为必填项
      },
      hobby:[String], //限制爱好只能为数组，数组中的每一项必须为字符串
      info:Schema.Types.Mixed, //接收所有类型
      date:{
        type:Date,
        default:Date.now()
      },
      enable_flag:{
        type:String,
        default:'Y'
      }
    });

    //将字段规则对象与集合建立连接
    const StudentModel = mongoose.model('students',studentsRule) ;
    //借住这个 model对象就可以对当前的数据库进行操作了
    //增 create  
    //查 findOne findMany find
    //改  updateOne
    //删  updateOne  deleteMany
    StudentModel.create({
      stu_id:'004',
      name:'强',
      age:'42',
      sex:'男',
      hobby:['女','打代码','打篮球'], //限制爱好只能为数组，数组中的每一项必须为字符串
      info:'一个风一样的男子', //接收所有类型
    },function(err,data){
        if (!err) console.log(data)
        else console.log(err)
    })
  } 
})






//关联函数中的this
function logColor() {
  console.log(this.color);
}

function Obj() {}
var o = new Obj();
Obj.color = "red";
o.color = "blue";
Obj.logColor = logColor;
o.logColor = logColor;
Obj.logColor(); //red
o.logColor(); //blue


//内部函数中的this
var v = 1;

function Program() {
  var v = 2;
  this.v = 3;
}

Program.prototype.logV =function(){
  function innerLog(){
    console.log(this.v);
  }
  innerLog();
}

var pro = new Program();
pro.logV();


//如何在内部函数中 调用外部函数中的属性（变量）
// 1. 留住this 2.自定义变量  3. 传参
//留住this
Program.prototype.logV =function(){
  var _this = this;
  function innerLog(){
    console.log(_this.v);
  }
  innerLog();
}

// 自定义变量
Program.prototype.logV =function(){
  function innerLog(){
    console.log(this.v);
  }
  this.innerLog = innerLog;
  this.innerLog();
}

//传参
Program.prototype.logV =function(){
  function innerLog(v){
    console.log(v);
  }
  innerLog(this.v);
}
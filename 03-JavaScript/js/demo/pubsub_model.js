//
class Subscribe{
  constructor(){
    this.pond=[];
  }
  add(fn){
    //往this.pond中增加方法
    //let pond = this.pond;
    //console.log(pond);
    this.pond.push(fn)
    this.pond=[...this.pond];
    //console.log(this.pond);
  }
  remove(fn){
    //移除
    //获取要移除项的索引
    let index = this.pond.indexOf(fn);
    //可以给予index判断，也可以将当前项设置为null，在下次使用this.pond的时候处理到null即可
    if(index!==-1){
      this.pond.splice(index,1);//移除当前项
    }
    console.log(this.pond,'remove');
  }
  //如果传递了参数，依次将参数赋值给执行的每一个方法
  invoke(...arg){
    //将this.pond中的每一个方法都执行
    console.log(this.pond,'invoke');
  for(let item of this.pond){
    //console.log(item);
    item(...arg);
  }
  }
}

let fn1 =(...arg)=>{console.log('fn1');console.log(arg);}
let fn2 =(...arg)=>{console.log('fn2');console.log(arg);}
let fn3 =(...arg)=>{console.log('fn3');console.log(arg);}
let fn4 =(...arg)=>{console.log('fn4');console.log(arg);}

let sub = new Subscribe();
sub.add(fn1);
sub.add(fn2);
sub.add(fn3);
sub.remove(fn2);

sub.invoke(2);
sub.remove(fn2);
sub.remove(fn2);
sub.invoke(666);
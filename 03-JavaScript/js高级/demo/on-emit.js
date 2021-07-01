let fs =require('fs');
//发布订阅
class Pond{
  constructor(){
    this.pond=[];
  }
  on(fn){
    this.pond.push(fn);
  }
  off(fn){
    let index = this.pond.indexOf(fn);
    if(index!==-1){
      this.pond.splice(index,1);
    }else{
      throw new Error(fn+'不存在，请核对代码');
    }
  }
  emit(...args){
    this.pond.forEach(item=>{
      item(...args);
    })
  }
}

let school={};
let p = new Pond();
p.on(()=>{
  if(Object.keys(school).length===2){
    console.log(school);
  }
});
p.on(()=>{console.log(1);});

fs.readFile('./03-JavaScript/js高级/demo/name.txt', 'utf8', (err, data) => {
  school['name'] = data;
  p.emit();//发布
});
fs.readFile('./03-JavaScript/js高级/demo/age.txt', 'utf8', (err, data) => {
  school['age'] = data;
  p.emit();//发布
});















// let f1=()=>{
//   console.log('f1');
// }
// let f2=()=>{
//   console.log('f2');
// }
// let f3=(x)=>{
//   console.log('f3',x);
// }

// let p = new Pond();
// p.on(f1);
// p.on(f2);
// p.on(f3);
// p.off(f2);
// p.emit(250);
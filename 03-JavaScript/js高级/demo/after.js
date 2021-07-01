//after 生成新的函数，到达一定条件后执行
const after=(times,callback)=>{
  return ()=>{
    if(--times===0){
      callback();
    }
  }
}

let fn = ()=>{
  console.log('fn执行');
}
let newAfter = after(3,fn);

//newAfter执行3次后，再执行callback函数
newAfter();
newAfter();
newAfter();
newAfter();

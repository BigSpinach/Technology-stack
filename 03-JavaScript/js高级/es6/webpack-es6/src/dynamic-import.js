//dynamic-import  动态导入


let btn = document.createElement('button');

btn.addEventListener('click',function(){

  //import 语法返回的是一个 promise
  import('./file.js').then(data=>{
    console.log(data);
  },err=>{
    console.log(err);
  })

});

document.body.appendChild(btn);
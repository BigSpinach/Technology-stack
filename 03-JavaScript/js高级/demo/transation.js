//事务
//在做某一事情前后分别作了别的事情 react事务
//perform 执行 履行 表演 演出

let perform = (dosomething,wrappers)=>{
  //控制执行顺序
  wrappers.forEach(wrap=>{
    wrap.initializae();
  });
  dosomething();
  wrappers.forEach(wrap=>{
    wrap.close();
  });
}

//调用
let dosomething=()=>{
  console.log('dosomething');
}
perform(dosomething,[
  //wrapper
  {///wrapper1
    initializae(){
      console.log('初始化1');
    },
    close(){
      console.log('结束1');
    }
  },
  {///wrapper2
    initializae(){
      console.log('初始化2');
    },
    close(){
      console.log('结束2');
    }

  }
])
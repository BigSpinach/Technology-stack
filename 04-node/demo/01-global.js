//global 
//浏览器中有window ，也有global，但浏览器不能直接访问global，需要使用window来代理global

//1.  let var 等声明的变量只在当前作用域下，不能挂载到global对象上
let a = 1;
var b = 2;
console.log(a, b, global.a, global.b); //1 2 undefined undefined

//2. global 的使用
global.a = 100;
console.log(global.a); //100


//默认声明的属性不放在global对象上
//node的特点：每一个文件都是一个模块(模块怎么来的？被一个匿名函数包裹起来)
//这个匿名函数中有5个参数 ： exports,module,require,__dirname,__filename
//这5个参数可以直接在当前js文件（模块）下使用
//注意： 模块中的 this!==global
//      this 被更改为 module.exports
console.log(this === module.exports); //true

console.log(this); //{}
//global 如何访问呢
//1. 直接使用 global关键字
console.log(global); //Object [global] 
//2. this 如何指向global
(function () {
  console.log(this); //Object [global] 
})()


//node 中的全局对象和全局属性
//global，exports，module,require,__dirname,__filename



//global 对象的属性和方法
console.log(global); //...
//global 常用属性
//- global
//- process ---进程，可以开启多个线程
//- Buffer --- 缓存区  读取文件使用  内存中的数据都是2进制，buffer使用16进制
//- clearInterval setInterval
//- clearTimeout  setTimeout
//- clearImmediate setImmediate  

//global.process  代表当前应用的进程
console.log(global.process); // 

//title
//version
//versions:{...}
//1) platform:win32  //windows 系统  darwin  mac系统

/*
2) argv: ---------代表用户传递的参数 //默认有两个值，这两个值没啥用
   [ 'C:\\Program Files\\nodejs\\node.exe',   ---当前node的执行文件
     'c:\\Users\\LIUKAI\\Desktop\\Technology-stack\\04-node\\demo\\tempCodeRunnerFile.js' ], ---当前执行的文件
一般执行node文件 使用1. run code   相当于  node 1.js   
只能通过 命令+文件名 +各种参数     eg  --env=xxx    --config xxx/xx/x.x  --port 6666
一般 使用个 process.argv(2)//去除掉前连个参数
console.log(process.argv);//[--env,xxx,--config,xxx/xx/x.x,--prot,6666]
//需求将 [--env,xxx,--config,xxx/xx/x.x,--prot,6666]转成对象的形式
*/
let config = process.argv.slice(2).reduce((memo,current,index,input)=>{
  if(current.includes('--')){
    memo[current.slice(2)] = input[index+1];
  }
  return memo;
},{})

//使用命令执行当前文件  
//node 01.config.js --prot 6666 --env production  --config xx/x
console.log(config);//{ port: '6666', env: 'production', config: 'xx/x' }


//3) pid : 进程id  可以通过这个pid 中止进程
//4) chdir 和 cwp（current working directory）
//5) memoryUsage 
//6) env：环境变量
//7) nextTick  node中的微任务
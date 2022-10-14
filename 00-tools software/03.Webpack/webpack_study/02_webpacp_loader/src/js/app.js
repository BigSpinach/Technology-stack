//导入

//webpack不能直接构建css格式的文件,
import demoCss from'../css/demo.css';
console.log(demoCss);

//直接执行命令 webpack ./src/js/app.js -o ./build/js/app.js --mode=development
//会报错
/*
  ERROR in ./src/css/demo.css 1:0
  Module parse failed: Unexpected token (1:0)
  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  > .demo {
  |   background-color: yellowgreen;
  |   margin: 20px auto;
  @ ./src/js/app.js 4:0-37 5:12-19
*/


//编写webpack的配置文件（好处，简化命令和配置loader&plugin处理webpack不能处理的文件格式）
//webpack默认会找 webpack.config.js 或 webpackfile.js










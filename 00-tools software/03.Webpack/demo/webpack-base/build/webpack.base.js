const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
const path = require('path');
const {  merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env)=>{
  //console.dir(env);//{ WEBPACK_SERVE: true, development: true }
  //{ WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true }
  // let isDev = env.development;
  let isDev = env.development;
  const base={
    entry:path.resolve(__dirname,'../src/index.js'),
    output:{
      path:path.resolve(__dirname,'../dist'),
      filename:'build.js'
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'../src/index.html'), 
        filename: 'index.html', //输出文件路径及其文件名
        minify: !isDev && {//开发模式
          removeAttributeQuotes: true,//移除双引号
          collapseBooleanAttributes: true//移除空白符
        },
        hash:true, // 在引用资源的后面增加hash戳
      })
    ]
  }

  if(isDev){
    //mode=development
    return merge(base,dev);
  }else{//mode=production  isDve=undefined   Boolean(undefined)===false
    return merge(base,prod);
  }
}
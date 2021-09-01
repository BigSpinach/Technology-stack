const path =require('path');
module.exports = {
  mode:'development',
  devServer:{
    port:8989,
    quiet:true,
    open:true,
    proxy:{ 
      '/api':{//匹配处理/api 开头的请求
        //配置后请求的地址是  http://localhost:6000/api/xxx
        //目标地址是  http://localhost:6000/xxx
        //所以需要将 /api 删掉
        target:'http://localhost:6060',//代理的目标地址
        pathRewrite:{'^/api':''},//替换掉路径中的  /api
        changeOrigin:true//支持跨域，并允许跨协议 ftp http  ...
      }
    },
    historyApiFallback:true,// 请求404时，返回项目根目录下的 index.html 页面
  },
  // devtool: 'cheap-module-eval-source-map',
   devtool:'cheap-module-source-map', 


}
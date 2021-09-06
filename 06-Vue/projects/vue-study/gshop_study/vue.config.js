const px2rem = require('postcss-px2rem');
//配置postcss-px2rem
const postcss = px2rem({
  remUnit:37.5//基准大小 baseSize， 设计稿10等份的值 ，
  //比如设计稿 375*800，这里就写37.5
  //注意：如果lib-flexible/flexible.js中 不是10等份，那么需要跟这里的保持一致 
})


module.exports = {
  runtimeCompiler: true,
  lintOnSave:false,//关闭eslint语法检测
  css:{//添加postcss设置
    loaderOptions:{
      postcss:{
        plugins:[postcss]
      }
    }
  }

}

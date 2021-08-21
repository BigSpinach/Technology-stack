const path = require('path');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
const {
  merge
} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//引入vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
  let isDev = env.development;

  const base = {

    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'build.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: 'index.html',
        minify: !isDev && {
          removeAttributeQuotes: true, //移除双引号
          collapseBooleanAttributes: true //移除空白符
        },
        hash: true, // 在引用资源的后面增加hash戳
      }),

      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        //配置vue-loader
        {
          test:/\.vue$/i,
          use:{
            loader:'vue-loader',
          }
        },

        {
          test: /\.css$/i,
          //修改 vue-style-loader 是对 style-loader的增强
          use: ['vue-style-loader', {//loader传参，解决css样式文件嵌套其他样式文件的情况
            loader:'css-loader',
            options:{
              importLoaders:2
            }
          },'postcss-loader','sass-loader']
        },
        { //使用sass-loader来处理sass文件
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },

      ]
    }

  }

  if (isDev) {
    return merge(base, dev);
  } else {
    return merge(base, prod);
  }
}
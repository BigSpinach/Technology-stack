const path = require('path');
const dev = require('../build/webpack.dev.js');
const prod = require('../build/webpack.prod.js');
const {
  merge
} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = (env) => {
  let isDev = env.development;

  const base = {
    entry: {
      "main": path.resolve(__dirname, '../src/index.js')
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test:/\.vue$/,
          use:{
            loader:'vue-loader',
          }
        },
        {
          test:/\.js$/i,
          use:'babel-loader'
        },
        {
          test: /woff|ttf|eot|svg|otf/,
          use: {
            loader: 'file-loader'
          }
        },
        {
          test: /\.(jpe?g|png|gif|bmp)/i,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 5 * 1024
            }
          }]
        },
        {
          test: /\.css$/i,
          use: [isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          }, 'postcss-loader', 'sass-loader']
          //postcss-loader 需要一个 postcss.config.js 的配置文件 
          //.browserListrc 文件，负责确定当前项目所覆盖的市面上浏览器的广度 
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [!isDev && new MiniCssExtractPlugin({
        filename: '../dist/main.css' //抽离到dist目录下的main.css文件中 
      }),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: 'index.html',
        minify: !isDev && {
          removeAttributeQuotes: true, //移除双引号
          collapseBooleanAttributes: true //移除空白符
        },
        hash: true,
      }),
      new VueLoaderPlugin()
    ].filter(Boolean),
    resolve:{
      extensions:['.js','.vue','.json'],
      alias:{
        //模块路径别名
        //键别名 值：模块的绝对路径
        'root':path.resolve(__dirname,'src') ,
        'vue$':'vue/dist/vue.esm.js'
      }
    }
  }


  if (isDev) {
    return merge(base, dev);
  } else {
    return merge(base, prod)
  }

}
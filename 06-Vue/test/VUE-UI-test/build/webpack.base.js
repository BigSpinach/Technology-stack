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
      filename: '[name].bundle.js',
      publicPath:'/'//生成的引用路径，从项目根目录开始   /dist/main.bundle.js
    },
    module: {
      rules: [{
          test: /\.vue$/i,
          use: ['vue-loader']
          // 它会应用到普通的 `.js` 文件
          // 以及 `.vue` 文件中的 `<script>` 块
        },
        {
          test: /\.js$/i,
          use: 'babel-loader'
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
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["vue-style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [!isDev && new MiniCssExtractPlugin({
        filename: '../dist/main.css' //抽离到dist目录下的main.css文件中 
      }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: 'index.html',
        minify: !isDev && {
          removeAttributeQuotes: true, //移除双引号
          collapseBooleanAttributes: true //移除空白符
        },
        hash: true,
      }),

    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        //模块路径别名
        //键别名 值：模块的绝对路径
        'root': path.resolve(__dirname, 'src'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    // devtool:'cheap-module-eval-source-map'
  }


  if (isDev) {
    return merge(base, dev);
  } else {
    return merge(base, prod)
  }

}
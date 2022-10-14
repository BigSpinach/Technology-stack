const {
  resolve
} = require('path');

module.exports = {
  mode: 'development',
  entry: {
    newName: './src/js/app.js'
  },
  output: {
    path: resolve(__dirname, './build/js'),
    filename: 'app.bundle.js',
  },
  //配置loader
  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", 'less-loader'],
      },
      {
        //其他资源
        exclude: /\.(html|js|json|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]', //命名
          outputPath: 'media' //输出路径
        }
      },
      { //css中的图片
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: 'file-loader'
      },
      { //配置 html中引入的图片
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: {
          loader: 'url-loader',
          options: { //小于10k转为base64，大于10k 继续使用file-loader
            limit: 10 * 1024
          }
        }
      }


    ],
  },
  //配置plugin

};
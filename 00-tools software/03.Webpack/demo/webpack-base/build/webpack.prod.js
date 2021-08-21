const path = require('path');
const {  CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  plugins: [
    //new CleanWebpackPlugin(),
    new CleanWebpackPlugin({
      // 清空匹配的路径
      cleanOnceBeforeBuildPatterns: [path.resolve('xxxx/*'), '**/*'],
    })
  ],
  module: {}
}
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization:{
    minimizer:[
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      // 清空匹配的路径
      cleanOnceBeforeBuildPatterns: [path.resolve('xxxx/*'), '**/*'],
    })

  ],
  

}
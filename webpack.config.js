const path = require('path');
const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码打包成文件注入html

module.exports = {
  devtool: '#source-map',

  entry: {
    index: './src/client.js',
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public'),
    publicPath: '/',
    // libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        // 对于纯css文件，由于面向的是第三方库，无需开启module
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[contenthash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
          }]
      }
    ]
  },
  // 这是最重要的选项，详见下方对externals的讲解
  // externals: nodeExternals({
  //   whitelist: /\.(css|less|sass|scss)$/
  // }),
  // 配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。
  performance: false,
  plugins: [
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
  ],
};

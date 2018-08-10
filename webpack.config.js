const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  mode: 'development',
  entry: [
    './src/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  devServer: {
    hot: true,
    publicPath: '/dist/',
    historyApiFallback: true,
    open: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node-modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production';
  config.entry = './src/ClientApp.jsx';
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;

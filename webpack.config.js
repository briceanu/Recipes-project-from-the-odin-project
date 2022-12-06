const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    broccoli: './src/js/broccoli.js',
    egg_salad: './src/js/egg_salad.js',
    shrimp: './src/js/shrimp.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Recipes',
      template: './src/template.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Recipes',
      template: './src/broccoli_soup.html',
      filename: 'broccoli_soup.html',
      chunks: ['broccoli'],
    }),
    new HtmlWebpackPlugin({
      title: 'Recipes',
      template: './src/egg_salad.html',
      filename: 'egg_salad.html',
      chunks: ['egg_salad'],
    }),
    new HtmlWebpackPlugin({
      title: 'Recipes',
      template: './src/shrimp.html',
      filename: 'shrimp.html',
      chunks: ['shrimp'],
    }),
    new MiniCssExtractPlugin({ filename: 'style[contenthash].css' }),
  ],
};

//change mode to production and then
//write instead "style-loader" MiniCssExtractPlugin.loader

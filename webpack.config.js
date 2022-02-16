const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: "./src/js/main.js", // bundle's entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: "[name].js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    }),
    new MiniCssExtractPlugin({ filename: 'style.css'}),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 8080,
    watchFiles: './src',
    open: true,
    hot: true
  }
};
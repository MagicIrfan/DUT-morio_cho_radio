const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
let cssLoaders = { loader: 'css-loader', options: {importLoaders:1} };
module.exports = {
    entry: './src/js/main.jsx',
    output: 
    {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin({
    title: 'Morio-cho Radio',
    template: './src/html/main.tpl.html',
    filename: 'index.html'
    }), 
    new CleanWebpackPlugin(),new MiniCssExtractPlugin(),new ESLintPlugin()
    ],
  devServer:
  {
    contentBase: path.resolve(__dirname, './dist'),
    hot:true,
    compress:true,
    port:3000,
    host:'localhost',
    publicPath:'http://localhost:3000/',
  },
  module:
  {
      rules: 
      [
        {
				test: /\.m?js|jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
					presets: ['@babel/preset-env','@babel/preset-react']
					}
				}
		},
        {
          test: /\.(sa|sc|c)ss$/i,
          use: 
          [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: './dist/assets/images'
              },
             }, cssLoaders]
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: '[sha512:hash:base64:7].[ext]',
                  outputPath: 'assets/images/'
                },
              }
            ],
        },
        {
          test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[sha512:hash:base64:7].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
        },
        /*{
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[sha512:hash:base64:7].[ext]',
                    outputPath: 'assets/images/'
                  }
              }
              
            ],
        },*/

      ]
  },
  experiments: {
    topLevelAwait: true
  }
};

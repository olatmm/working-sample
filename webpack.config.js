const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackLayoutPlugin = require('html-webpack-layout-plugin'); 

 module.exports = {
     mode:'development',
     entry: {
         home: './src/index.js'
     },
     devtool: 'inline-source-map',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].bundle.js'
     },
     module:{
         rules:[
             {
                 test:/\.(scss)$/,
                 use:[
                     {
                         loader : 'style-loader'
                     },
                     {
                         loader : 'css-loader'
                     },
                     {
                         loader: 'postcss-loader',
                         options:{
                             plugins: function (){
                                 return [
                                     require('autoprefixer')
                                 ];
                             }
                         }
                     },
                     {
                         loader: 'sass-loader'
                     }
                 ]
             }
         ]
     },
     devServer:{
         contentBase: path.join(__dirname, './dist/'),
         compress: true,
         port:9000
     },
     plugins:[
         new HtmlWebpackPlugin(),
         new HtmlWebpackPlugin({
             layout: path.join(__dirname, 'layout.html')
         }),
         new HtmlWebpackPlugin({
             layout: path.join(__dirname, 'layout.html'),
             title: 'Home Page',
             filename: './dist/index.html'
         }),
         new HtmlWebpackLayoutPlugin()
     ]

 };

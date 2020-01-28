const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDevelopment = !process.env.production;
const isProduction = process.env.production;

const outputPath = path.join(__dirname, 'www/static/build/');

const config = {
    entry: { main: './src/index.js' },
    output: {
        path: outputPath,
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['.js','.less']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]_[hash:base64:5]',
                            minimize: isProduction
                        }
                    },
                    {
                        loader: 'less-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg|png|jpg|gif|mp4|webm|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanPlugin(['www/static/build'], __dirname),
        new CopyPlugin([{
            from: 'sw.js',
            to: './'
        }]),
        new MiniCssExtractPlugin({
            filename: 'main.[chunkhash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './www/index.html',
            filename: 'index.html'
        })
    ]
};
  
module.exports = config;
const path = require('path');
const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: false,
    allChunks: true
});

module.exports = {
    entry: './scripts/',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, 'images/'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            },
            {
            test: /\.(s*)css$/,
            use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
            }
        ]
    },
    plugins: [
        extractPlugin,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'head'
        }),
        new CopyWebpackPlugin([
            {
              from: './views/',
              to: './views/[name].[ext]',
              toType: 'template'
            },
            {
                from: './views/article-views/',
                to: './views/article-views/[name].[ext]',
                toType: 'template'
            }
          ]),
          new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                // disable: process.env.NODE_ENV !== 'production', // Disable during development
                pngquant: {
                    quality: '0-10'
            }})
        ],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.js$/
     })]
    }
};

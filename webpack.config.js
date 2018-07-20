const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            },
            {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'] //chaining loaders // reverse order
            }
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: ['env']
            //       }
            //     }
            // }  
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'head'
        })
    ],
    devServer: {
        hot: true,
        port: 9000,
        // proxy: {
        //     '/': {
        //         target: 'http://localhost:3000/',
        //         secure: false,
        //         // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
        //         prependPath: false
        //     }
        // },
        // publicPath: 'http://localhost:9000/'
    }
};
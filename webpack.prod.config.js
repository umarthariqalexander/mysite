var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "bundle.css",
          chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|mp3)$/i,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            }
        ]
    }
};


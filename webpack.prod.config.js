var path = require('path');

module.exports = {
    entry: './src/index.js',
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
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
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
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};


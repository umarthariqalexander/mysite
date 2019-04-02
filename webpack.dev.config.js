var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.(s*)css$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|mp3)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true
    }
};


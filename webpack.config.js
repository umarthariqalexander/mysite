var path = require('path');
var SRC = path.resolve(__dirname, '/');
var DEST = path.resolve(__dirname, '/dist/');


module.exports = {
    context: path.join(__dirname, ''),
    entry : {
        app: './app.js'
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'website.bundle.js'
    },
    module: {
      rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }]
    },

  //   // preLoaders: [{test: /(\.jsx|\.js)$/, loader: 'eslint-loader', include: SRC, exclude: ['./node_modules']}],
  //   loaders: [
  //
  //     {test: /(\.jsx|\.js)$/, include: SRC, loaders: ['babel']}, // handling jsx files
  //     // {test: /(\.css|\.scss)$/, include: SRC, loader: 'style!css?sourceMap!autoprefixer-loader!sass?sourceMap'}, // Converting SCSS --> CSS files
  //     {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
  //     {test: /\.(jpe?g|png|gif)$/i, include: SRC, loaders: ['file']},
  //     {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
  //     {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
  //     {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
  //   ]
  // },
}

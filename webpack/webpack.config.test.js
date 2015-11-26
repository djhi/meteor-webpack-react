/* eslint no-var:0 */
var baseconfig = require('./webpack.config.client');
var _ = require('lodash');
var devProps = require('./devProps');
var path = require('path');

module.exports = _.assign(_.clone(baseconfig), {
  devtool: 'inline-source-map',
  entry: [
    './lib/core-js-no-number',
    'regenerator/runtime',
  ],
  module: {
    loaders: (baseconfig.module.loaders || []).concat([{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules|webpack\/lib/,
    }]),
    // instrument only testing sources with Istanbul
    preLoaders: [{
      test: /\.js/,
      exclude: /^.*(main_client|main_server).*\.jsx?/,
      include: path.resolve('app/'),
      loader: 'isparta-instrumenter-loader',
    }],
  },
  plugins: baseconfig.plugins,
  devServer: {
    publicPath: devProps.baseUrl + '/assets/',
    host: devProps.host,
    hot: true,
    historyApiFallback: true,
    contentBase: devProps.contentBase,
    port: devProps.webpackPort,
  },
});

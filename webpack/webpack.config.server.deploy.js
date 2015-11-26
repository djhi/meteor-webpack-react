var webpack = require('webpack');
var baseconfig = require('./webpack.config.server');
var _ = require('lodash');
var dirs = require('../bin/dirs');
var RunInMeteorPlugin = require('webpack-meteor-tools/lib/RunInMeteorPlugin');

module.exports = _.assign(_.clone(baseconfig), {
  watch: true,
  plugins: (baseconfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new RunInMeteorPlugin({
      meteor: dirs.meteor,
      target: 'server',
      mode: 'production',
      key: 'server',
    }),
  ]),
});

var webpack = require('webpack');
var baseconfig = require('./webpack.config.server');
var _ = require('lodash');
var dirs = require('../bin/dirs');
var RunInMeteorPlugin = require('webpack-meteor-tools/lib/RunInMeteorPlugin');

module.exports = _.assign(_.clone(baseconfig), {
  devtool: 'source-map',
  output: _.assign(_.clone(baseconfig.output), {
    pathinfo: true,
  }),
  watch: true,
  plugins: (baseconfig.plugins || []).concat([
    new RunInMeteorPlugin({
      meteor: dirs.meteor,
      key: 'server',
      target: 'server',
      mode: 'development',
    }),
  ]),
});

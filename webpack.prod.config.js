/* eslint-disable */

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJSON = require('./package.json');
var config = require('./webpack.config');

var cssLoader = _.find(config.module.loaders, function (loader) {
    return ~loader.loader.indexOf('css');
});
 
cssLoader.loader = ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions');

config.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        chunks: ['Alexithymia-RU', 'Amon-RU']
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
].concat(config.plugins);

module.exports = config;

/* eslint-disable */

var _ = require('lodash');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config');

var cssLoader = _.find(config.module.loaders, function (loader) {
    return ~loader.loader.indexOf('css');
});

cssLoader.loader = ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions');

config.plugins.unshift(
    new ExtractTextPlugin('[name].css')
);

config.plugins.unshift(
    new webpack.optimize.CommonsChunkPlugin('main', ['Alexithymia-RU.js', 'Amon-RU.js', 'vendor.js'])
);

//config.plugins.unshift(
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
//);

module.exports = config;

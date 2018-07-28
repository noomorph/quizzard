/* eslint-disable */

var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ENV = process.env.ENV;

var templateConfig = require('./webpack.tpl.config');

templateConfig.config.module.loaders.push({
    test: /\.css$/,
    loader: 'style!css!autoprefixer?browsers=last 2 versions',
    include: templateConfig.constants.src
});

var entry = {
    'Alexithymia-RU': ['./containers/Alexithymia-RU'],
    'Cattell-RU': ['./containers/Cattell-RU'],
    'Factor5-RU': ['./containers/Factor5-RU'],
    'Amon-RU': ['./containers/Amon-RU'],
    'Emin-RU': ['./containers/Emin-RU'],
    'SPA-RU': ['./containers/SPA-RU'],
};

var plugins = _.map(_.keys(entry), templateConfig.generateAppHtml.bind(entry));

module.exports = _.defaultsDeep({
    entry: entry,
    plugins: plugins.concat([
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: [],
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            chunks: ['test']
        }),
    ]),
    devServer: {
        contentBase: 'dist/',
        host: '0.0.0.0',
        publicPath: '/',
        port: 8000
    },
}, templateConfig.config);

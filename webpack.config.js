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

module.exports = _.defaultsDeep({
    devServer: {
        contentBase: 'dist/',
        host: '0.0.0.0',
        publicPath: '/',
        port: 8000
    },

    entry: {
        'Alexithymia-RU': ['./containers/Alexithymia-RU'],
        'Amon-RU': ['./containers/Amon-RU'],
        'Emin-RU': ['./containers/Emin-RU'],
        'SPA-RU': ['./containers/SPA-RU'],
    },

    plugins: [
        templateConfig.generateAppHtml('Alexithymia-RU'),
        templateConfig.generateAppHtml('Amon-RU'),
        templateConfig.generateAppHtml('Emin-RU'),
        templateConfig.generateAppHtml('SPA-RU'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: [],
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            chunks: ['test']
        }),
    ]
}, templateConfig.config);

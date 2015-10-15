/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJSON = require('./package.json');
var ENV = process.env.ENV;

module.exports = {

    context: path.resolve(__dirname, 'src'),

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: 'dist/',
        port: 8000
    },

    entry: {
        main: ['./main.js'],
        vendor: Object.keys(
            packageJSON.dependencies
        ).filter(function (dep) {
            return dep !== 'lodash';
        })
    },

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        alias: {
            'util': path.resolve(__dirname, 'src', 'util')
        }
    },

    module: {
        // preLoaders: [{
        //     test: /\.(js|jsx)$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader'
        // }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src')
        }, {
            loader: 'file-loader?name=[path][name].[ext]',
            include: []
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions',
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=8192',
            include: path.resolve(__dirname, 'src')
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.DefinePlugin({
            ENV: ENV,
            VERSION: packageJSON.version
        }),
        new HtmlWebpackPlugin({ filename: 'app.html', template: path.resolve(__dirname, 'src', 'app.html') }),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    ]
};

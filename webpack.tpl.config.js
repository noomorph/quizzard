/* eslint-disable */

var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ENV = process.env.ENV;

var srcPath = path.resolve(__dirname, 'src');
var testPath = path.resolve(__dirname, 'test');

function generateAppHtml(entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName + '.html',
        template: path.join(srcPath, 'containers', 'main.html'),
        inject: true,
        hash: ENV === 'production',
        excludeChunks: _(this).keys().without(entryName).value()
    });
}

module.exports = {
    constants: {
        src: srcPath,
        test: testPath,
    },

    generateAppHtml: generateAppHtml,

    config: {
        context: srcPath,

        output: {
            filename: '[name].js',
            chunkFilename: '[name].chunk.[id].js',
            path: path.resolve(__dirname, 'dist')
        },

        stats: {
            colors: true,
            reasons: true
        },

        resolve: {
            root: srcPath
        },

        module: {
            preLoaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }],
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(srcPath),
                    path.resolve(__dirname, 'test')
                ]
            }, {
                loader: 'file-loader?name=[path][name].[ext]',
                include: []
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192',
                include: path.resolve(srcPath)
            }]
        },
    }
};

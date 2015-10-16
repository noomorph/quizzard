/* eslint-disable */

var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJSON = require('./package.json');
var ENV = process.env.ENV;

function generateHTML(entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName.toLowerCase().replace('-', '.') + '.html',
        template: path.resolve(__dirname, 'src', 'containers', 'main.html'),
        inject: true,
        chunks: [entryName]
    });
}

module.exports = {

    context: path.resolve(__dirname, 'src'),

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.[id].js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: 'dist/',
        publicPath: '/',
        port: 8000
    },

    entry: {
        'Alexithymia-RU': ['./containers/Alexithymia-RU'],
        'Amon-RU': ['./containers/Amon-RU'],
        'vendor': _(packageJSON.dependencies).keys().without('lodash').value(),
    },

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        alias: {
            'images': path.resolve(__dirname, 'src', 'images'),
            'surveys': path.resolve(__dirname, 'src', 'surveys'),
            'widgets': path.resolve(__dirname, 'src', 'widgets'),
            'util': path.resolve(__dirname, 'src', 'util'),
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
            //loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions'),
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=8192',
            include: path.resolve(__dirname, 'src')
        }],
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        // new webpack.optimize.CommonsChunkPlugin('main.js', ['Alexithymia-RU', 'Amon-RU']),
        new webpack.DefinePlugin({
            ENV: ENV,
            VERSION: packageJSON.version
        }),
        //new ExtractTextPlugin('[name].css'),
        generateHTML('Alexithymia-RU'),
        generateHTML('Amon-RU'),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    ]
};

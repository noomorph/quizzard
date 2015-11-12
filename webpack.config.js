/* eslint-disable */

var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ENV = process.env.ENV;
var entry = {
    'Alexithymia-RU': ['./containers/Alexithymia-RU'],
    'Amon-RU': ['./containers/Amon-RU'],
    'Emin-RU': ['./containers/Emin-RU'],
    'test': ['chai', '../test/index'],
};

function generateHTML(entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName + '.html',
        template: path.resolve(__dirname, 'src', 'containers', 'main.html'),
        inject: true,
        hash: ENV === 'production',
        excludeChunks: _(entry).keys().without(entryName).value()
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
        host: '0.0.0.0',
        publicPath: '/',
        port: 8000
    },

    entry: entry,

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        alias: {
            'containers': path.resolve(__dirname, 'src', 'containers'),
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
            test: /\.spec\.js$/,
            loader: 'mocha-loader!imports?chai=chai&expect=>chai.expect!babel-loader?presets[]=es2015&presets[]=stage-2',
            include: path.resolve(__dirname, 'test')
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'stage-2'] },
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'test')
            ]
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
        generateHTML('Alexithymia-RU'),
        generateHTML('Amon-RU'),
        generateHTML('Emin-RU'),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html'), chunks: [] }),
        new HtmlWebpackPlugin({ filename: 'test.html', chunks: ['test'] }),
    ]
};

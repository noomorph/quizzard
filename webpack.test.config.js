/* eslint-disable */

var _ = require('lodash');
var templateConfig = require('./webpack.tpl.config');

templateConfig.config.module.loaders.push({
    test: /\.css$/,
    loader: 'null-loader',
    include: templateConfig.constants.src
});

templateConfig.config.module.postLoaders = [{
    test: /\.js$/,
    loader: 'isparta',
    include: templateConfig.constants.src
}];

module.exports = _.defaultsDeep({
    entry: {
        test: ['../test/index'],
    },
    plugins: []
}, templateConfig.config);

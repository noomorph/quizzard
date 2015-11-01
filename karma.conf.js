var path = require('path'); // eslint-disable-line no-var
var webpack = require('./webpack.config'); // eslint-disable-line no-var

module.exports = function karmaConfig(config) {
    config.set({
        browsers: [ 'PhantomJS' ],
        // karma only needs to know about the test bundle
        files: [
            'test/index.js',
            'src/containers/main.js', // to include non-tested code in coverage
        ],
        frameworks: ['chai', 'mocha'],
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-coveralls',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-webpack',
        ],
        // run the bundle through the webpack and sourcemap plugins
        preprocessors: {
            'src/containers/main.js': [ 'webpack', 'sourcemap' ],
            'test/index.js': [ 'webpack', 'sourcemap' ],
        },
        reporters: [
            'spec',
            'coverage',
            'coveralls',
        ],
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/',
        },
        singleRun: true,
        // webpack config object
        webpack: Object.assign(webpack, {
            devtool: 'inline-source-map',
            entry: undefined,
            plugins: [],
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    loader: 'isparta-instrumenter-loader',
                    include: path.resolve(__dirname, 'src'),
                }],
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: { presets: ['es2015', 'stage-2'] },
                    include: [
                        path.resolve(__dirname, 'src'),
                        path.resolve(__dirname, 'test'),
                    ],
                }, {
                    loader: 'file-loader',
                    include: path.resolve(__dirname, 'src'),
                    exclude: /\.js$/,
                }],
            },
        }),
        webpackMiddleware: {
            noInfo: true,
        },
    });
};

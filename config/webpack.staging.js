var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common');

const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const variables = require('./webpack.variables');

module.exports = webpackMerge(commonConfig, {

    devtool: 'source-map',

    output: {
        path: variables.staging.outDir,
        publicPath: variables.staging.publicPath,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
});
var webpack = require('webpack');
var srcDir = './src/';
var buildDir = __dirname + '/build/';

module.exports = {
    entry: srcDir + 'main.js',
    output: {
        path: buildDir,
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};
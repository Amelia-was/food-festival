const webpack = require('webpack');
const path = require('path');

module.exports = {
    // root of bundle and beginning of the dependecy graph
    // go to clients code
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // default is producion mode
    // development mode will minify code automatically
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}
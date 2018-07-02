let config = require('./webpack.base')
const webpack = require('webpack')

config.entry.push('webpack-hot-middleware/client')

config.watch = true;

config.watchOptions = {
    ignored: /node_modules/
}

config.mode = 'development'

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    /**
     * 生成source map, 且不要插入column number
     */
    new webpack.SourceMapDevToolPlugin({
        exclude: [/node_modules/, /vendor.js$/],
        columns: false
    })
])

module.exports = config

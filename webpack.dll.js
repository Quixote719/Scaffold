const webpack = require('webpack')

const vendors = [
    'react',
    'react-dom',
    'react-router-dom',
    'antd'
]

module.exports = {
    output: {
        path: __dirname + '/build/www/src',
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        "vendor": vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: __dirname + '/build/www/src/manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}

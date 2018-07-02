const path = require('path')
const webpack = require('webpack')
// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: [
        __dirname + '/src/index.jsx'
    ],
    output: {
        path: __dirname + '/build/www/src',
        filename: 'bundle.js',
        publicPath: '/src'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(__dirname + '/build/www/src/manifest.json')
        }),
        new CheckerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    "css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]",
                    {
                        loader: "less-loader"
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
}

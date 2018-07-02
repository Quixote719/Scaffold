const webpack = require('webpack')
// https://stackoverflow.com/questions/29596714
// /new-es6-syntax-for-importing-commonjs-amd-modules-i-e-import-foo-require/29598404#29598404
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('koa-webpack-hot-middleware')
const path = require('path')
const Koa = require('koa')

const webpackDevConfigPath = path.resolve(__dirname, '..', '..', 'webpack.dev.js')
const webpackDevConfig = require(webpackDevConfigPath)

module.exports = (app) => {
    if (process.env.NODE_ENV === 'development') {
        const compiledConfig = webpack(webpackDevConfig)
        app.use(webpackDevMiddleware(compiledConfig, {
            noInfo: false,
            quiet: false,
            publicPath: webpackDevConfig.output.publicPath
        }))
        app.use(webpackHotMiddleware(compiledConfig))
    }
}

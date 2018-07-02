const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')
const views = require('koa-views')

const config = require('./config')
const setupWebpackMiddleware = require('./webpack')

const app = new Koa()

setupWebpackMiddleware(app)

// Must be used before any router is used
app.use(views(path.join(__dirname, '../www')))

// 配置静态资源加载中间件
app.use(KoaStatic(
    path.join(__dirname , '../www')
))

// 渲染index.html
// 若请求的api没办法匹配, 则渲染index.html
app.use(async (ctx) => {
    await ctx.render('index.html')
})

app.listen(config.port)

console.log('服务器已启动, 端口号为: ' + config.port)

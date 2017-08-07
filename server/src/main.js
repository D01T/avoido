const koa = require('koa')
const Pug = require('koa-pug')

const app = new koa()
const pug = new Pug({
  viewPath: '../res'
})

pug.use(app)

app.use(async ctx => {
  ctx.body = pug.render('../res/index.pug')
})

app.listen(4000)

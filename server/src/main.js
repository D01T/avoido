import Koa from 'koa'
import Path from 'path'
import Pug from 'koa-pug'

const root = Path.join(__dirname, '../../')

const app = new Koa()
const pug = new Pug({
  viewPath: root + '/client/view/',
  app: app
})

app.use(async ctx => {
  ctx.body = pug.render('index')
})

app.listen(4000)

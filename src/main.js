const path = require('path');
const Koa = require('koa');
const Pug = require('koa-pug');
const etag = require('koa-etag');
const serve = require('koa-static');
const conditional = require('koa-conditional-get');
const logger = require('koa-chalk-logger');
const Game = require('./game');

const root = path.join(__dirname, '../');
const app = new Koa();
const port = process.env.PORT || 4000
const pug = new Pug({
  viewPath: path.join(root, 'view/'),
  app,
});
const game = new Game();
game.run();

app
  .use(logger())
  .use(conditional())
  .use(etag())
  .use(async (ctx, next) => {
    ctx.body = pug.render('index');
  })
  .use(serve(path.join('..', 'public'),))

app.listen(port, () => console.log(`Listening on port ${port}`));

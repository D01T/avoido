const path = require('path');
const Koa = require('koa');
const Pug = require('koa-pug');
const Game = require('./game');

const root = path.join(__dirname, '../../');

const app = new Koa();
const pug = new Pug({
  viewPath: path.join(root, '/client/view/'),
  app,
});
const game = new Game();
game.run();

app.use(async (ctx) => {
  ctx.body = pug.render('index');
});

app.listen(4000);

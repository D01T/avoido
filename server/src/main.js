const koa = require('koa');
const pug = require('pug');

const app = new koa();

app.use(async (ctx) => {
  ctx.body = pug.renderFile('../../client/view/index.pug');
});

app.listen(4000);

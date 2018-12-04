"use strict";

const path = require('path');
const fs = require('fs');

const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

router.get('/', async (ctx, next) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.resolve(__dirname, 'build/index.html'));
  await next();
});

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(cors());
app.use(serve(path.resolve(__dirname, 'build')));
app.use(bodyParser());
app.use(router.routes());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.status = err.statusCode || err.status || 500;

    ctx.body = {code: err.statusCode, message: err.message};
  }
})

app.listen(PORT, () => {
  console.log(`Server work on port ${PORT}...`);
});

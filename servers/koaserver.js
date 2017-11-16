var Koa = require('koa');
var app = new Koa();

app.use(ctx => {
  if (ctx.request.method == 'GET') {
		var params = /\/(\d+)\/(\w+)/g.exec(ctx.request.url)
    ctx.set('Connection', 'close');
    ctx.body = `${params[1]}, ${params[2]}`;
  }
  
});

app.listen(8000);
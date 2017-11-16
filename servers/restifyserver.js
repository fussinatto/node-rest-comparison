var restify = require('restify');

var server = restify.createServer();

server.get('/:slot/:metric',function respond(req, res) {
  const {slot, metric} = req.params;
	res.set('Connection', 'close');
  res.end(`${slot} ${metric}`);
});

server.listen(8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

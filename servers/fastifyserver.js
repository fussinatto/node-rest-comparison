const fastify = require('fastify');

let app = fastify();

app.get('/:slot/:metric', (req, res) => {
  const {slot, metric} = req.params;
  res
    .header('Connection', 'close')
    .send(`${slot} ${metric}`);
});

app.listen(process.env.PORT || 8000, err => {
  if (err) throw err;
  console.log(`server listening on ${ app.server.address().port }`);
});

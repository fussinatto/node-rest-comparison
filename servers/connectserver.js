var connect = require('connect');
var app = connect();

app.use(function (req, res) {
  if (req.method == 'GET') {
    var params = /\/(\d+)\/(\w+)/g.exec(req.url)
    res.setHeader('Connection', 'close');
    res.end(`${params[1]}, ${params[2]}`)
  }
});


app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
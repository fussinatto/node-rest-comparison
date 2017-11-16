var express = require('express');
var app = express();

app.get('/:slot/:metric', function (req, res) {
  const {slot, metric} = req.params;
  res.set('Connection', 'close');
  res.send(`${slot} ${metric}`);
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});


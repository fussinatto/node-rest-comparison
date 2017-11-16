const http = require("http");
const url = require('url');


http.createServer((req, res) => {
	if (req.method == 'GET') {
		var params = /\/(\d+)\/(\w+)/g.exec(req.url)
		res.setHeader('Connection', 'close')
		res.end(params[1], params[2])
	}

}).listen(8000);

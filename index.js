"use strict"

const
	PORT = 9080,
	http = require('http');

function startServer() {
	var server = http.createServer(function (request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end("Hello World\n");
	});
	server.listen(PORT);
	console.log(`Server listening at port ${PORT}`)
}

startServer();


var http = require('http');

const appInsights = require('applicationinsights');
appInsights.setup('28cbafac-ed8e-4879-a4ca-1c3185c51225').start();

var server = http.createServer(function(request, response) {

	console.log("server created")
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("Response Header set")
    console.log("Hello Azure")
    response.end("Hello World!");
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
//response.end("Hello Azure!");
//console.log("Hello Azure http://localhost:%d", port);
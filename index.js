// var http = require('http');
var APP_CONFIG = {
   "mongo": {
    "hostString": "mongodb://localhost:27017/test",
    "user": "username",
    "db": "test"
   }
};
var url = APP_CONFIG.mongo.hostString;

if (process.env.APP_CONFIG) {
	APP_CONFIG = JSON.parse(process.env.APP_CONFIG);
	url = "mongodb://" + APP_CONFIG.mongo.user + ":_welc0me_@" + APP_CONFIG.mongo.hostString;
}

var http = require('http');
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

	MongoClient.connect(url,
    	function(err, db) {
            if(!err) {
                res.end("We are connected to MongoDB\n");
            } else {
                res.end("Error while connecting to MongoDB\n");
            }
    });
});

server.listen(process.env.PORT || 3000);

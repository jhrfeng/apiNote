/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");
var MongoClient = require('mongodb').MongoClient;
var dbClient = require("./dbClient");
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/service/saveNoteApi', function (req, res) {
  dbClient.saveNoteApi('booknote', req.body, function(result){
    res.send(result);
  }); 
});

app.get('/service/queryAllNote', function (req, res) {
  dbClient.queryAllNote('booknote', function(result){
    res.send(result);
  });
});

app.get("*", function(req, res) {
	  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
  	
  	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "127.0.0.1", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});

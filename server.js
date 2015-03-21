'use strict';

var util = require('util');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));

var PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));


app.get('/api/heavy', function(req, res) {
  setTimeout(function() {
    res.send('// do nothing');
  }, 1000);
});

var friendMap = require('./server/response/friendsmap.json');

app.get('/api/friends/:username([\\w.-]+)', function(req, res) {
  var username = req.params.username;
  res.json(friendMap[username]);
});



var PORT = process.env.PORT;
var HOSTNAME = 'localhost';

var server = require('http').createServer(app);
server.listen(PORT, HOSTNAME, function () {
  console.log('SERVER_READY');
  console.log(util.format('http://%s:%d にブラウザでアクセスしてください'), HOSTNAME, PORT);
});

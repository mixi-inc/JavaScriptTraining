'use strict';

var util = require('util');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));

var PUBLIC_DIR = path.join(__dirname, 'test');
var MODULE_DIR = path.join(__dirname, 'node_modules');
app.use(express.static(PUBLIC_DIR));
app.use('/modules', express.static(MODULE_DIR));


app.get('/api/heavy', function(req, res) {
  setTimeout(function() {
    res.send('// do nothing');
  }, 1000);
});


var server = require('http').createServer(app);
var PORT = 8000;
var HOSTNAME = 'localhost';
server.listen(PORT, HOSTNAME, function () {
  console.log(util.format('SERVER_READY on http://%s:%d', HOSTNAME, PORT));
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');
var http = require('http');
var yelp = require('node-yelp');
const cors = require('cors');



require('dotenv').load();

var routes = require('./routes/index.js');






// Load environment variables
var app = express();
// App Setup
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);





// Server Setup
var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);




module.exports = app;

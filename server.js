const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

mongoose.connect(process.env.DB_PATH);

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./api_routes.js"));

var port = process.env.PORT || 5003;

app.listen(port, function(){
  console.log('listening on port', port);
});

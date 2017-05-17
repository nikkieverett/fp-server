const express = require("express");
const uuid = require('node-uuid');
const Recipe = require('./models/recipe');

const router = express.Router();

router.get('/raw/recipes', (req, res) => {
  res.send('hi im the raw recipes data page');
});

module.exports = router;

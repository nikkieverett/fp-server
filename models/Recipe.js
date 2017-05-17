const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  ID: {type: String, required: true, unique: true}, //create unique key_id
  Title: {type: String, required: true, unique: true},
});

const Recipe = mongoose.model('Recipe', schema);
module.exports = Set;

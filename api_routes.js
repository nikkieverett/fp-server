const express = require("express");
const uuid = require('node-uuid');
const Recipe = require('./models/Recipe.js');

const router = express.Router();

//I need a GET request for a list of recipes based on category
//I need a GET request for a list of recipes based on ingredient

//api data for all recipes
router.get('/api/recipes', (req, res) => {
  Recipe.find({})
  .exec(function(err, recipes){
    console.log(recipes, err);
    res.send(recipes);
  });
});

//I need a POST request to add a new recipe
router.post('/api/recipes', (req, res) => {
  var cb = (data) => {
    res.send(data);
  };
  var recipe = new Recipe();
  recipe.id = uuid.v4(),
  recipe.title = req.body.title,
  recipe.prepTime = req.body.prepTime,
  recipe.cookTime = req.body.cookTime,
  recipe.totalTime = req.body.totalTime,
  recipe.href = req.body.href,
  recipe.category = req.body.category,
  recipe.img = req.body.img,
  recipe.ease = req.body.ease,
  recipe.rating = req.body.rating,
  recipe.ingredients = req.body.ingredients,
  recipe.directions = req.body.directions,
  recipe.notes = req.body.notes,
  recipe.servings = req.body.servings,
  recipe.tried = req.body.tried,

  recipe.save(cb)

});

// router.delete('api/recipes/:recipeId', (req, res) => {
//
// })

//I need a DELETE request to delete recipes
//I need a PUT request to update recipes

module.exports = router;

const Recipe = require("../model/Recipe");


module.exports = {
    getAllRecipe: function (callback) {
        Recipe.find({}, function (err, payload) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, payload);
          }
      });
    },
  //-------------------------------------------------//Creates a new Recipe
    createRecipe: function (body, callback) {
        let createdRecipe = new Recipe({
          RecipeName: body.RecipeName,
        });
  //-------------------------------------------------//Save the Recipe
    createdRecipe.save(function (err, payload) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, payload);
        }
    });
  },
};
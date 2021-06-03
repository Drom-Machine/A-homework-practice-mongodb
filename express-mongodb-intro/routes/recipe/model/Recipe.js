const mongoose = require("mongoose");

//----------------------------------------------------------------

const recipeSchema = new mongoose.Schema({
    RecipeName: {
        type: String,
    },
});


module.exports = mongoose.model("recipe", recipeSchema);
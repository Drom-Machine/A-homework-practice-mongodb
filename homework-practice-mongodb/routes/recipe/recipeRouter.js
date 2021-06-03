const express = require("express");
const router = express.Router();

//-------------------------------------------------------------------------//recipeController

const recipeController = require("./controller/recipeController");

//----------------------------------------------------------------/

router.get("/", function (req, res, next) {
    res.json({ message: "great success" });
});

//----------------------------------------------------------router.get-----//get-all-recipes

router.get("/get-all-recipes", function (req, res) {
    recipeController.getAllRecipe(function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "great success", data: payload });
        }
    });
});

//---------------------------------------------------------router.post-----//create-recipe

router.post("/create-recipe", function (req, res) {
    recipeController.createRecipe(req.body, function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "great success", data: payload });
        }
    });
});

module.exports = router;
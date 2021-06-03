const express = require("express");
const router = express.Router();

const {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
    getSpecificSuggestion,
} = require("./controller/suggestionController");


router.get("/all-suggestions", getAllSuggestions);

router.get("/single-suggestion/:id", getSingleSuggestion);

router.post("/create-suggestion", createSuggestion);

router.put("/update-suggestion/:id", updateSuggestion);

router.delete("/delete-suggestion/:id", deleteSuggestion);

module.exports = router;
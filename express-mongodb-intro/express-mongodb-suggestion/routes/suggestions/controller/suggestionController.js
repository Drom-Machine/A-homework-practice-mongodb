const Suggestion = require("../model/Suggestion");

//------------------------------------------------------------------------------getAllSuggestions

async function getAllSuggestions(req, res) {
    try {
    let foundAllSuggestions = await Suggestion.find({});
            res.json({ message: "Great Success", foundAllSuggestions });
        } catch (e) {
            res.json({ message: "Nope", error: e.message })
        }
    }

//------------------------------------------------------------------------------getSingleSuggestion

async function getSingleSuggestion(req, res) {
    try {
    let foundSuggestion = await Suggestion.findById({
        _id: req.params.id,
    });
        res.json({ message: "Great Success", foundSuggestion });
    } catch (e) {
        res.json({ message: "Nope", error: e.message })
    }
}

//------------------------------------------------------------------------------createSuggestion

async function createSuggestion(req, res) {
    let { title, author, suggestion, likes, anonymous } = req.body;
    try {
        let createdSuggestion = await new Suggestion({
            title: reg.body.title,
            author: reg.body.author,
            suggestion: reg.body.suggestion,
    });
    let savedSuggestion = await createdSuggestion.save();
        res.json({ message: "Great Success", savedSuggestion });
    } catch (e) {
        res.json({ message: "Nope", error: e.message })
    }
}

//------------------------------------------------------------------------------updateSuggestion

async function updateSuggestion(req, res) {
    try {
    let updatedSuggestion = await Suggestion.findByIdAndUpdate(
        { _id: req.params.id },
        { title: req.body.title, suggestion: req.body.suggestion },
        {
            new: true,
        }
    );
        res.json({ message: "Great Success", updatedSuggestion });
    } catch (e) {
        res.json({ message: "Nope", error: e.message });
    }
}

//------------------------------------------------------------------------------deleteSuggestion

async function deleteSuggestion(req, res) {
    try {
    let deletedSuggestion = await Suggestion.findByIdAndRemove({
        _id: req.params.id,
    });
        res.json({ message: "Great Success", deletedSuggestion });
    } catch (e) {
        res.json({ message: "Nope", error: e.message })
    }
}

module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
};
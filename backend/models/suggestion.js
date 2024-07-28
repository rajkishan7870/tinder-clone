const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({});

const suggestionModel = mongoose.model("Suggestion", suggestionSchema);

module.exports = suggestionModel;
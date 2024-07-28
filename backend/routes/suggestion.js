const express = require('express');
const { checkForSuggestion } = require('../controllers/suggestion');
const router = express.Router()

router.get("/", checkForSuggestion)

module.exports = router;
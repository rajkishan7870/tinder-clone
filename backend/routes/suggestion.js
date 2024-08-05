const express = require('express');
const { checkForSuggestion, getMessageOuter, recommendationwithRAG } = require('../controllers/suggestion');
const router = express.Router()

router.get("/", checkForSuggestion)
router.get("/message", getMessageOuter)
router.get("/recommendation", recommendationwithRAG)

module.exports = router;
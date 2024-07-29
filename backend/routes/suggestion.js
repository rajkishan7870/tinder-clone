const express = require('express');
const { checkForSuggestion, getMessageOuter } = require('../controllers/suggestion');
const router = express.Router()

router.get("/", checkForSuggestion)
router.get("/message", getMessageOuter)

module.exports = router;
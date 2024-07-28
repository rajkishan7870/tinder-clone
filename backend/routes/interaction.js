const express = require("express");
const { newLikeInteraction, newDislikeInteraction, allLikeInteraction, allMatchRequest } = require("../controllers/interaction");
const router = express.Router();

router.post("/like", newLikeInteraction)
router.post("/dislike", newDislikeInteraction)
router.get("/alllike", allLikeInteraction)
router.get("/matchreq", allMatchRequest)

module.exports = router;
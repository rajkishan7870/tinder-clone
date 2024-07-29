const express = require("express");
const { newLikeInteraction, newDislikeInteraction, allLikeInteraction, allMatchRequest, matchAccept, matchReject } = require("../controllers/interaction");
const router = express.Router();

router.post("/like", newLikeInteraction)
router.post("/dislike", newDislikeInteraction)
router.get("/alllike", allLikeInteraction)
router.get("/matchreq", allMatchRequest)
router.post("/accept", matchAccept)
router.post("/reject", matchReject)

module.exports = router;
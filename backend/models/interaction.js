const mongoose = require("mongoose")

interactionSchema = new mongoose.Schema({
    liked_to: { type: String, },
    disliked_to: { type: String, },
    likedBy: { type: String, },
    dislikedBy: { type: String, },
    matched: {type: Boolean, },
    interactedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
}, {timestamps: true})

const interactionModel = mongoose.model("Interaction", interactionSchema);

module.exports = interactionModel;

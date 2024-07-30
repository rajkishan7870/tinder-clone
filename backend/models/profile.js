const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    image: { type: Array },
    bio: { type: String },
    language: { type: String, },
    gender: { type: String, required: true },
    height: { type: String,  },
    college: { type: String, },
    location: { type: String, },
    interested_in: { type: String, required: true },
    relegion: { type: String,  },
    zodiac: { type: String },
    drinking_type: { type: String },
    smoking_type: { type: String },
    liked_to: { type: Array },
    disliked_to: { type: Array },
    liked_from: { type: Array },
    disliked_from: { type: Array },
    matched_with: { type: Array },
    match_reject_for: {type: Array},
    match_reject_by: {type: Array},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    image: {type: [String], required: true},
    bio: {type: String,},
    language: { type: String, required: true },
    gender: { type: String, required: true },
    height: { type: String, required: true },
    college: { type: String, required: true },
    location: { type: String, required: true },
    interested_in: { type: String, required: true },
    relegion: { type: String, required: true },
    zodiac: { type: String, },
    drinking_type: { type: String, },
    smoking_type: { type: String, },

}, { timestamps: true });

const Profile = mongoose.model("user", profileSchema);

module.exports = { Profile };
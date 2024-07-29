const ProfileModel = require("../models/profile");

const checkForSuggestion = async (req, res) => {
  const id = req.user._id;
  if (id) {
    const profileData = await ProfileModel.findOne({ createdBy: id });
    console.log(profileData);
    if (profileData) {
      const userDetails = {
        gender: profileData?.gender,
      };
      res.status(200).json(userDetails);
    } else {
      res.status(201).json({
        message: "Navigate to Profile",
      });
    }
  } else {
    res.status(401).json({
      error: true,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { checkForSuggestion };

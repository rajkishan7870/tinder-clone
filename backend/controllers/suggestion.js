const ProfileModel = require("../models/profile");
const UserModel = require("../models/user");

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

const getMessageOuter = async (req, res) => {
  const id = req.user._id;
  const profileData = await ProfileModel.findOne({ createdBy: id });
  matchedData = profileData.matched_with;

  if (matchedData) {
    const userDocs = await UserModel.find({
      email: { $in: matchedData }
    }).select('_id');

    const userIds = userDocs.map(user => user._id);

    const matchedProfileData = await ProfileModel.find({
      createdBy: { $in: userIds }
    }).populate({ path: "createdBy", model: "User" });

    res.status(201).json(matchedProfileData)
  }else{
    res.status(201).json({message: "No Profile Found"});
  }
};

module.exports = { checkForSuggestion, getMessageOuter };

const ProfileModel = require('../models/profile');

const checkForSuggestion = async (req, res) => {
    console.log(req)
    const id = req.user._id
    const profileData = await ProfileModel.findOne({createdBy : id});
    console.log(profileData)
    if (profileData == null) {
        res.status(401).json({
          error: true,
          message: "Invalid or expired token",
        });
      } else {
        const userDetails = {
          gender: profileData?.gender,
        };
        res.status(200).json(userDetails);
    }
}

module.exports = {checkForSuggestion}
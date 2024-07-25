const interactionModel = require("../models/interaction");
const profileModel = require("../models/profile");

const profileDataBylike = async (filter) => {
  const profileDataForFE = [];
  const allLikeInteractions = await interactionModel.find(filter);

  await Promise.all(
    allLikeInteractions.map(async (interaction) => {
      if (!interaction.liked_to) return;

      const allProfileData = await profileModel
        .find({})
        .populate({ path: "createdBy", model: "User" });

      const liked_to_email = interaction.liked_to;
      const matchingProfiles = allProfileData.filter(
        (profile) => profile.createdBy.email === liked_to_email
      );

      matchingProfiles.forEach((profile) => {
        profileDataForFE.push({
          bio: profile.bio,
          language: profile.language,
          height: profile.height,
          college: profile.college,
          location: profile.location,
          relegion: profile.relegion,
          drinking_type: profile.drinking_type,
          smoking_type: profile.smoking_type,
        });
      });
    })
    );
    return profileDataForFE
};

module.exports = {profileDataBylike}

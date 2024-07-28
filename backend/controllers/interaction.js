const interactionModel = require("../models/interaction");
const profileModel = require("../models/profile");
const { checkForSameDay } = require("../service/auth");

const newLikeInteraction = async (req, res) => {
  console.log(req.user.email);
  console.log(req.body.liked_to);
  const totalLikeInteraction = await interactionModel.find({
    likedBy: req.user.email,
  });
  let likeInteractionCount = 0;
  totalLikeInteraction.forEach((interaction) => {
    if (checkForSameDay(interaction.createdAt)) {
      likeInteractionCount++;
    }
  });
  if (likeInteractionCount < 30) {
    // Update liked_to and liked_from in profileModel

    const profiles = await profileModel
      .find()
      .populate({ path: "createdBy", model: "User" });

    const likedByProfileToUpdate = profiles.find(
      (profile) => profile.createdBy.email === req.user.email
    );

    await profileModel.findByIdAndUpdate(
      { _id: likedByProfileToUpdate._id },
      { $push: { liked_to: req.body.liked_to } }
    );

    const likedToProfileToUpdate = profiles.find(
      (profile) => profile.createdBy.email === req.body.liked_to
    );

    await profileModel.findByIdAndUpdate(
      { _id: likedToProfileToUpdate._id },
      { $push: { liked_from: req.user.email } }
    );

    // Save interactions in interactionModel
    const interactionData = {
      liked_to: req.body.liked_to,
      likedBy: req.user.email,
      matched: false,
      interactedBy: req.user._id,
    };
    const interaction = await interactionModel.create(interactionData);
    if (interaction) {
      res.status(200).json(interactionData);
    } else {
      res.status(401).json("Interaction not created");
    }
  } else {
    res.status(200).json({ message: "Limit reached for Today!" });
  }
};

const newDislikeInteraction = async (req, res) => {
  const profiles = await profileModel
    .find()
    .populate({ path: "createdBy", model: "User" });

  const dislikedByProfileToUpdate = profiles.find(
    (profile) => profile.createdBy.email === req.user.email
  );

  await profileModel.findByIdAndUpdate(
    { _id: dislikedByProfileToUpdate._id },
    { $push: { disliked_to: req.body.disliked_to } }
  );

  const dislikedToProfileToUpdate = profiles.find(
    (profile) => profile.createdBy.email === req.body.disliked_to
  );

  await profileModel.findByIdAndUpdate(
    { _id: dislikedToProfileToUpdate._id },
    { $push: { disliked_from: req.user.email } }
  );

  const interactionData = {
    disliked_to: req.body.disliked_to,
    dislikedBy: req.user.email,
    interactedBy: req.user._id,
  };
  const interaction = await interactionModel.create(interactionData);
  if (interaction) {
    res.status(200).json(interactionData);
  } else {
    res.status(401).json("Interaction not created");
  }
};

const allLikeInteraction = async (req, res) => {
  const profiles = await profileModel.find({}).populate({
    path: "createdBy",
    model: "User",
  });

  const profileData = profiles.find(
    (profile) => profile.createdBy.email === req.user.email
  );
  allLikes = profileData.liked_to;

  allProfileOfLike = [];

  allLikes.forEach((email) => {
    const singleLikeProfile = profiles.find(
      (profile) => profile.createdBy.email === email
    );
    allProfileOfLike.push(singleLikeProfile);
  });

  if (allProfileOfLike) {
    res.status(201).json(allProfileOfLike);
  } else {
    res.status(401).json({ message: "No like interaction exists" });
  }
};

const allMatchRequest = async (req, res) => {
  const profiles = await profileModel.find({}).populate({
    path: "createdBy",
    model: "User",
  });

  const profileData = profiles.find(
    (profile) => profile.createdBy.email === req.user.email
  );
  allMatchingReq = profileData.liked_from;

  allProfileOfMatchingReq = [];

  allMatchingReq.forEach((email) => {
    const singleMatchingReqProfile = profiles.find(
      (profile) => profile.createdBy.email === email
    );
    allProfileOfMatchingReq.push(singleMatchingReqProfile);
  });

  if (allProfileOfMatchingReq) {
    res.status(201).json(allProfileOfMatchingReq);
  } else {
    res.status(401).json({ message: "No Match Request Found" });
  }
};

module.exports = {
  newLikeInteraction,
  newDislikeInteraction,
  allLikeInteraction,
  allMatchRequest,
};

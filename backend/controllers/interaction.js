const interactionModel = require("../models/interaction");
const profileModel = require("../models/profile");
const UserModel = require("../models/user");
const { checkForSameDay } = require("../service/auth");
const { profileDataBylike } = require("../service/profile");

const newLikeInteraction = async (req, res) => {
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
    const interactionData = {
      liked_to: req.body.liked_to,
      likedBy: req.user.email,
      matched: false,
      interactedBy: req.user._id,
    };
    console.log(interactionData)
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
  likedBy = req.user.email
  filter = {likedBy}
  const allLikeInter = await profileDataBylike(filter)
  if (allLikeInter) {
    res.status(201).json(allLikeInter);
  } else {
    res.status(401).json({message: "No like interaction exists"})
  } 
};




const allMatchRequest = async (req, res) => {
  filter = {liked_to: req.user.email, matched: false}
  const allMatchRequest = await profileDataBylike(filter)
  if (allMatchRequest) {
    res.status(201).json(allMatchRequest)
  } else {
    res.status(401).json({message: "No Match Request Found"})
  }
}



module.exports = {
  newLikeInteraction,
  newDislikeInteraction,
  allLikeInteraction,
  allMatchRequest,
};

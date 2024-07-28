const profileModel = require("../models/profile");
const UserModel = require("../models/user");
const { create_Faiss_DB } = require("../RAG/profile");

const createNewProfile = async (req, res) => {
  console.log(req.body);
  const profile_data = req.body;
  const profileStr = JSON.stringify(profile_data);
  console.log(profileStr);
  // await create_Faiss_DB([profileStr])
  const profile = await profileModel.create({
    ...profile_data,
    liked_to: [],
    disliked_to: [],
    liked_from: [],
    disliked_from: [],
    matched_with: [],
    match_reject_for: [],
    match_reject_by: [],
    createdBy: req.user._id,
  });
  if (profile) {
    res.status(200).json(profile_data);
  } else {
    res.status(401);
    alert("Failed to create User");
  }
};

const getProfile = async(req, res)=>{
  const email = req.user.email;
  const profiles = await profileModel.find({}).populate({
    path: "createdBy",
    model: "User",
  });

  const profileData = profiles.find(
    (profile) => profile.createdBy.email === email
  );
  if (profileData){
    res.status(201).json(profileData)
  }else{
    res.status(201).json({message: "No Profile Data Present"})
  } 
}

const checkAuthentication = async (req, res) => {
  const id = req.user._id;
    const profileData = await UserModel.findOne({ _id: id });
    console.log(profileData)
  if (profileData == null) {
    res.status(401).json({
      error: true,
      message: "Invalid or expired token",
    });
  } else {
    const userDetails = {
      name: profileData?.name,
      email: profileData?.email,
    };
    res.status(200).json(userDetails);
  }
};

const returnImageUrl = async (req, res) => {
  console.log(req?.file)

  res.status(201).json({message: "Done loading"})
}

module.exports = { createNewProfile, getProfile, checkAuthentication, returnImageUrl };

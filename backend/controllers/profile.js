const profileModel = require("../models/profile");
const UserModel = require("../models/user");
const { create_Faiss_DB } = require("../RAG/profile");
require('dotenv').config()
const cloudinary = require("cloudinary").v2
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.C_API_KEY,
  api_secret: process.env.C_API_SECRET
})

const createNewProfile = async (req, res) => {
  console.log(req.body);
  const profile_data = req.body;
  profileDataForFaiss = profile_data
  metaData = {
    createdBy: req.user._id
  }
  await create_Faiss_DB(profileDataForFaiss, metaData)
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
  if (req.file){
    const image = req.file.path;
    cloudinary.uploader.upload(image).then((result)=>{
      console.log(result)
      fs.unlink(image, err => {
        if (err) {
          console.error(`Error deleting file ${image}:`, err);
          res.status(500).json({error: "Failed to delete local file"});
        } else {
          res.status(201).json({url: result.url});
        }
      });
    }).catch(err => {
      console.error(`Cloudinary upload failed:`, err);
      res.status(500).json({error: "Failed to upload image to Cloudinary"});
    });
  } else {
    res.status(201).json({message: "File Not Uploaded"});
  }
}

module.exports = { createNewProfile, getProfile, checkAuthentication, returnImageUrl };

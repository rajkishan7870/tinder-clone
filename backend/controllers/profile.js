const profileModel = require("../models/profile");
const {create_Faiss_DB} = require("../RAG/profile")

const createNewProfile = async (req, res)=> {
    console.log(req.body);
    profile_data = req.body
    profileStr = JSON.stringify(profile_data)
    console.log(profileStr)
    // await create_Faiss_DB([profileStr])
    const profile = await profileModel.create({ ...profile_data, "createdBy": req.user._id })
    if (profile) {
        res.status(200).json(profile_data)
    }
    else {
        res.status(401);
        alert("Failed to create User");      
    }    
}

module.exports = {createNewProfile}
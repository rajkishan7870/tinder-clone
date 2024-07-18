const profileModel = require("../models/profile");
const {create_Faiss_DB} = require("../RAG/profile")

const createNewProfile = async (req, res)=> {
    console.log(req.body);
    profile_data = req.body
    profileStr = JSON.stringify(profile_data)
    console.log(profileStr)
    // await create_Faiss_DB([profileStr])
    await profileModel.create(profile_data)
    res.status(200).send({message: "New profile created",})
}

module.exports = {createNewProfile}
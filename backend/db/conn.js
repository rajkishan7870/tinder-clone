const mongoose = require("mongoose");
const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/Wemate")
        .then(() => {
            console.log("Database connection done")
        })
        .catch((err) => {
            console.log("No Database connection-1")
        })
}

module.exports = connectDB
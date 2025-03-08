const mongoose = require("mongoose");

const dbConnect = (req, res) => {
    mongoose.connect("mongodb+srv://sachinAdmin:sachin1234@cluster1.x766c.mongodb.net/BD5")
        .then(() => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = dbConnect;
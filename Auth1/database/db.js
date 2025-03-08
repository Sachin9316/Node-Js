const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb+srv://sachinAdmin:sachin1234@cluster1.x766c.mongodb.net/auth")
        .then(() => {
            console.log("connected to database");
        }).catch((err) => {
            console.log("Db connection failed");
        })
}

module.exports = dbConnect;
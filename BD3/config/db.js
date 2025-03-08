const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb+srv://sachinAdmin:sachin1234@cluster1.x766c.mongodb.net/BD3")
        .then((response) => {
            console.log("Database Connected successfully..")
        })
        .catch((err) => {
            console.log("Database connection failed ", err);
        })
}


module.exports = dbConnect;
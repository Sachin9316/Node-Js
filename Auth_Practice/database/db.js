const mongoose = require('mongoose')

const dbConnect = (req, res) => {
    mongoose.connect("mongodb+srv://sachinAdmin:sachin1234@cluster1.x766c.mongodb.net/auth_practice")
        .then(() => {
            console.log("DB connected successFully.....")
        })
        .catch((err) => {
            console.log("DB connection failed", err)
            res.json({
                message: "DB connection failed"
            })
        })
}

module.exports = dbConnect;
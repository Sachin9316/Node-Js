const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb+srv://sachinAdmin:BjMP5yoJ854N2GjW@cluster1.x766c.mongodb.net/BD1_Practice")
        .then(() => {
            console.log("DB connect hogaya Sachin!!!");
        }).catch((err) => {
            console.log("DB connection me error agaya", err)
        })
}

module.exports = dbConnect;
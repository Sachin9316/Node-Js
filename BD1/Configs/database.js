const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect("mongodb+srv://sachinAdmin:BjMP5yoJ854N2GjW@cluster1.x766c.mongodb.net/BD1").then(() => {
        console.log("DB Connected successfully");
    }).catch((err) => {
        console.log("Kuch to gadbad hai db me", err);
        process.exit(1);
    })
}

module.exports = dbConnect;
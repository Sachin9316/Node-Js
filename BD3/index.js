const express = require('express');
const dbConnect = require('./config/db');
const blogRoute = require('./routes/blogRoute');
const app = express();
app.use(express.json());

app.use("/api/v1", blogRoute);

app.get('/', (req, res) => {
    res.json({
        msg: "Hello i am from index.js"
    })
})

app.use((err, req, res, next) => {
    res.json({
        msg: "Something went wrong"
    })
})

app.listen(3000, () => {
    console.log("Listeing on port no. 3000");
})

dbConnect();
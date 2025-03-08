const express = require('express');
const dbConnect = require("./config/db")
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello world"
    })
})

app.listen(3000, () => {
    console.log("Listing on port 3000")
});

dbConnect();
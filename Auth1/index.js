const express = require("express");
const dbConnect = require('./database/db')
const user = require('./routes/user')
const app = express();
app.use(express.json());

app.use('/api/v1', user);

app.listen(3000, () => {
    console.log("Listing on port no 3000");
});

dbConnect();
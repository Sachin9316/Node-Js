const express = require('express');
const router = require('./routes/createTodoRoute');
const dbConnect = require('./configs/db');
const app = express();
app.use(express.json());

app.use('/api/v1', router);

app.use((err, req, res, next) => {
    res.json({
        msg: "someThing went wrong"
    })
})

app.listen(3000, () => {
    console.log("Listening on port no. 3000")
})

dbConnect();
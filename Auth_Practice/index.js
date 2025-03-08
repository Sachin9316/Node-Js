const express = require('express');
const app = express();
const authRouter = require('./routes/usersRoutes');
const dbConnect = require('./database/db')
app.use(express.json());

app.use('/api/v2', authRouter);

app.use((err, req, res, next) => {
    console.log("index.js file me hi error aaya hai");
    res.json({
        "error": "Internal Server Error",
        "message": "Something went wrong",
        err
    })
})

app.listen(3000, () => {
    console.log("listing on port no 3000");
});

dbConnect();
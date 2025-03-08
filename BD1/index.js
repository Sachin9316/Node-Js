const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const todoRoutes = require('./Routes/TodoRoute')
const app = express();
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('<h1>Sachin upadhyay</h1>')
})
app.use('/api/v1', todoRoutes)

app.use((err, req, res, next) => {
    console.log("Listening on port no. 3000");
})

app.listen(4000, () => {
    console.log("listening on port no. ", PORT)
})

const dbConnect = require('./Configs/database')
dbConnect();
const todoSchema = require('../models/TodoSchema')


// defining route handler
exports.createTodo = async (req, res) => {
    try {
        const payload = req.body;
        await todoSchema.create(payload).then((response) => {
            res.status(200).json({
                success: true,
                data: response,
                message: "Todo Created Successfully"
            })
        }).catch((err)=> {
            console.log("Error agaya during adding data into db" , err)
        })
    } catch (error) {
        console.log("Error agaya during adding data into db");
        res.status(500).json({
            success: false,
            data: "Internal server error",
        })
    }
}
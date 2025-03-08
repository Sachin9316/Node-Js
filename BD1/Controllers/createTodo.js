const Todo = require('../models/Todo')


// defining route handler
exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        await Todo.create({
            title,
            description
        }).then((response) => {
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
            msg: err
        })
    }
}
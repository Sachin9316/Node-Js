const like = require("../models/LikeModel");

exports.like = async (req, res) => {
    const { title, decription } = req.body;
    await like.create({ title, decription })
        .then((data) => {
            res.json({
                success: true,
                message: "like created successfully",
                data: data
            })
        }).catch((err) => {
            res.json({
                success: false,
                message: "Error creating like",
                data: err.message
            })
        })
}
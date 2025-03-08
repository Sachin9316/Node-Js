const Post = require("../models/PostModel");

exports.post = async (req, res) => {
    const { title, body, likes , comments } = req.body;
    await Post.create({ title, body })
        .then((data) => {
            res.json({
                success: true,
                message: "Post created successfully",
                data: data
            })
        }).catch((err) => {
            res.json({
                success: false,
                message: "Error creating post",
                data: err.message
            })
        })
}

exports.getAllPost = async (req,res) =>{
    await Post.find({}).then((data)=> {
        res.json({
            success: true,
            message: "Posts retrieved successfully",
            data: data
        })
    }).catch((err)=> {
        res.json({
            success: false,
            message: "Error retrieving posts",
            data: err.message
        })
    })
}
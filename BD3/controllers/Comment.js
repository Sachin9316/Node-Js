const Comment = require("../models/CommentModel");
const Post = require("../models/PostModel")

exports.comment = async (req, res) => {
    const { post, user, body } = req.body;

    const comment = new Comment({
        post, user, body
    })

    const savedComment = await comment.save()
        .then((data) => {
            res.json({
                success: true,
                message: "comment created successfully",
                data: data
            })
        }).catch((err) => {
            res.json({
                success: false,
                message: "Error creating post",
                data: err.message
            })
        })

    const postUpdated = await Post.findByIdAndUpdate(post, {
        $push: { comments: savedComment._id }
    }, { new: true }).populate("comments").exec();

    res.json({
        success: true,
        message: "Comment added to post",
        data: postUpdated
    })
}
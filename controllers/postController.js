const Post = require("../models/Post");


exports.getAllPosts = async (req,res) =>{
    try {
        const allPosts = await Post.find();
        res.json(allPosts);
    } catch (error) {
        res.json({
            msg: error
        });
    }
}


exports.savePosts = async (req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const postSaved = await post.save();
        res.json(postSaved);
    } catch (error) {
        res.json({
            msg: error
        });
    }
}

exports.getPostsById = async (req,res) =>{
        try {
            const singlePost = await Post.findById(req.params.id);
            res.json(singlePost);
        } catch (error) {
            res.json({
                msg: error
            });
        }
}


exports.deletePost = async (req,res)=>{
    try {
        const deletedPost = await Post.remove({
            _id: req.params.id
        });
        res.json(deletedPost);
    } catch (error) {
        res.json({
            msg: error
        });
    }
}

exports.updatePost = async (req,res)=>{
    try {
        const updatedPost = await Post.updateOne({
            _id: req.params.id
        }, {
            $set: {
                title: "updated title"
            }
        });
        res.json(updatedPost);
    } catch (error) {
        res.json({
            msg: error
        });
    }
}
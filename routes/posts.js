const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// GET ALL POSTS
router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.json(allPosts);
    } catch (error) {
        res.json({
            msg: error
        });
    }
})

//SAVE POST
router.post("/", async (req, res) => {
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
})

//GET POST BY ID
router.get("/:id", async (req, res) => {
    try {
        const singlePost = await Post.findById(req.params.id);
        res.json(singlePost);
    } catch (error) {
        res.json({
            msg: error
        });
    }
})

//DELETE POST
router.delete("/:id", async (req, res) => {
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
})


//UPDATE POST
router.patch("/:id", async (req, res) => {
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
})

module.exports = router;

// router.post("/",(req,res)=>{
//     const post = new Post({
//         title : req.body.title,
//         description : req.body.description
//     })
//     post.save()
//         .then(data =>{
//             res.json(data);
//         })
//         .catch(err=>{
//             res.json({msg : err})
//         })
// })
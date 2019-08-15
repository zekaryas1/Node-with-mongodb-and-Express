const express = require("express");
const postController = require("../controllers/postController")
const router = express.Router();

// GET ALL POSTS
router.get("/",postController.getAllPosts);

//SAVE POST
router.post("/",postController.savePosts);

//GET POST BY ID
router.get("/:id", postController.getPostsById);

//DELETE POST
router.delete("/:id",postController.deletePost);


//UPDATE POST
router.patch("/:id",postController.updatePost);

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
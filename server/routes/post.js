const router = require('express').Router()
const Post = require('../models/Post');
const User = require('../models/User');


// create a post
router.post("/create", async (req,res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})
// update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body}) 
            res.status(200).json("the post has been updated")
        } else {
            res.status(403).json("You can update only your posts")
        }
    } catch (error) {
        res.status(500).json(error) 
    }
})
// delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne() 
            res.status(200).json("the post has been deleted")
        } else {
            res.status(403).json("You can delete only your posts")
        }
    } catch (error) {
        res.status(500).json(error) 
    }
})

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get timeline posts
router.get('/timeline/all', async (req, res) => {
        try {
            const currentUser = await User.findById(req.body.userId)
            const userPosts = await Post.find({userId: currentUser._id})
            const friendPosts = await Promise.all(
                currentUser.followings.map((friendId) => {
                     return Post.find({userId: friendId})
                })
            )
            res.status(200).json(userPosts.concat(...friendPosts))
        } catch (error) {
            res.status(500).json(error)
        }
})


// like a post
router.put("/:id/like", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json("THe post has been liked")
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json("THe post has been disliked")        }
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get('/', (req, res, next) => {
    res.json('post page')
})

module.exports = router
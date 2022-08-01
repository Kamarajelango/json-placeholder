const { ObjectId } = require(('mongodb'))
const userHelper=require("../helpers/user.helper")

const helper = require('../helpers/post.helper')
const db = require('../shared/mongo')

const service = {
    async getAllPost(req, res) {
        try {
            let data = await helper.allPost()
            res.send(data)
        } catch (err) {
            res.status(500).send({ error: "can't fetch all posts" })
        }
    },
    async getPostId(req, res) {
        try {
            const data = await helper.postId(req.params.id)
            res.send(data)
        } catch (err) {
            res.status(500).send({ error: "can't fetch the post id" })
        }

    },
    //   async  getPostIdComments(req,res){
    //         try {
    //             const data=await db.comments.findOne({ _id : ObjectId(req.params.id)})
    //         res.send(data)
    //         } catch (error) {
    //             res.status(500).send({error:"can't fetch the post comments"})
    //         }           

    //     },
    async createPost(req, res) {
        try {
            //Data Validation
            const post = await helper.validate(req.body)

            //User Validation
            const user=await userHelper.postId(post.userId)
            if(!user) return res.status(400).send({error:"User Invalid"})

            //Insert Data
            const {insertedId:_id}= await helper.create(post)

            res.send(_id,...post)
        } catch (err) {            
            res.status(500).send({error:err.message})
        }
    },
  async  updatePost(req, res) {
      try {
           //Data Validation
         const newPost = await helper.validate(req.body)

         //Post Validation
         const oldPost = await helper.postId(req.params.id)
         if(!oldPost) return res.status(400).send({error:"invalid post"})

         //User Validation
         const user=await userHelper.postId(newPost.userId)
         if(!user) return res.status(400).send({error:"User Invalid"})

         //Update Post
         const {value}=await helper.update({_id:oldPost._id,...newPost})

         res.send(value)  
      } catch (err) {
        res.status(500).send({error:err.message})
      }
            
    },
   async deletePost(req, res) {
        try {
           
          //Post Validation
          const post = await helper.postId(req.params.id)
          if(!post) return res.status(400).send({error:"invalid post"})

          await helper.delete(post._id)
            res.end();
       } catch (err) {
         res.status(500).send({error:err.message})
       }
    }
}

module.exports = service;
const joi = require("joi")
const { ObjectId } = require(('mongodb'))
const db = require('../shared/mongo')

const schema = joi.object({
        userId: joi.string().required(),
        title: joi.string().max(100).required(),
        body: joi.string().max(500).required()

})
const helper = {
        async validate(post) {
                try {
                        const validate = await schema.validateAsync(post)
                        return validate
                } catch ({ details: [{ message }] }) {
                        throw new Error(message)
                }
        },
        allPost() {
                // console.log("enter all post side")
                return db.posts.find().toArray();
        },
        postId(_id) {
                return db.posts.findOne({ _id: ObjectId(_id) })
        },
        create(post) {
                console.log("create post....")           
                        return db.posts.insertOne(post)              
        },
        update({ _id, ...post }) {
                return db.posts.findOneAndUpdate({ _id: ObjectId(_id) }, { $set: post }, { returnDocument: "after" })
        },
        delete(_id) {
                return db.posts.deleteOne({ _id: ObjectId(_id) })
        }

}

module.exports = helper;
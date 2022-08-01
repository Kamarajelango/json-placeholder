const router = require('express').Router();
const service=require("../services/post.service")

router.get('/',service.getAllPost)
router.get('/:id',service.getPostId)
// router.get('/:id/comments',service.getPostIdComments)
router.post('/',service.createPost)
router.put('/:id',service.updatePost)
router.delete('/:id',service.deletePost)

module.exports=router;
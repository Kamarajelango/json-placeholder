const router = require('express').Router();
const service=require('../services/comments.servise')

router.get('/comments',service.getAllComments)
router.get('/comments/:id',service.getCommentById)

module.exports=router;
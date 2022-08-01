const router=require('express').Router();
const service=require('../services/users.service')

router.get('/users',service.getAllUsers)
router.get('/users/:id',service.getUserById)

module.exports=router;
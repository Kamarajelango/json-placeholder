const helper=require('../helpers/comment.helper')

const service = {
     async  getAllComments(req,res){
         try {
            const data=await helper.find()
            res.send(data)
         } catch (error) {
            res.status(500).send({error:"can't fetch the comments"})
         }                    
        },
     async  getCommentById(req,res){
         try {
            const data = await helper.findById(req.params.id)            
            res.send(data)
         } catch (error) {
            res.status(500).send({error:"can't fetch the comments id"})
         }           
        }
}

module.exports=service;
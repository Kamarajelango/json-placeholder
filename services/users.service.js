
const helper=require('../helpers/user.helper')

const service = {
  async  getAllUsers(req,res) {
        try {
            const data= await helper.find()
        res.send(data)
        } catch (error) {
            res.status(500).send({error:"can't fetch the users"})
        }        
    },
   async getUserById(req,res) {
       try {
        const data= await helper.findById(req.params.id)
        res.send(data)
       } catch (error) {
        res.status(500).send({error:"can't fetch the users id"})
        console.log(err.message)
       }
    }
}

module.exports = service
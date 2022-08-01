
const {ObjectId }=require(('mongodb'))
const db=require('../shared/mongo')



const helper={       
   find(){
        return db.users.find().toArray();
   },
    findById(_id){
            return db.users.findOne({_id : ObjectId(_id)})
    },
    
}

module.exports=helper;
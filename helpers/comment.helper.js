
const {ObjectId }=require(('mongodb'))
const db=require('../shared/mongo')



const helper={       
   find(){
        return db.comments.find().toArray();
   },
    findById(_id){
            return db.comments.findOne({_id : ObjectId(_id)})
    },
    
}

module.exports=helper;
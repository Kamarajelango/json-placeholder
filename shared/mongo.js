const {MongoClient} = require('mongodb')

const mongo = {
    db:null,
    comments:null,
    posts:null,
    users:null,
  async  connect (){
        const client = new MongoClient(process.env.MONGO_DB_URL)
      await client.connect();
      console.log("mongo db connected successfully")

      this.db=await client.db(process.env.MONGO_DB_NAME)
      console.log(`db selected - ${process.env.MONGO_DB_NAME}`)

      this.comments= this.db.collection("comments")
      this.posts=this.db.collection("posts")
      this.users=this.db.collection("users")
    }
}

module.exports=mongo;
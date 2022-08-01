require('dotenv').config();
const express = require("express")
const mongo = require('./shared/mongo')
const commentsRoute = require('./routers/comments.router')
const postsRoute = require('./routers/posts.router')
const usersRoute = require('./routers/users.router')
const middlewares = require('./shared/middlewares')
const PORT = process.env.PORT ||  3001
const app = express()

async function start(){
    
        await mongo.connect();
    //Middlewares  ---> Parse Request Body to JSON
    app.use(express.json())
    app.use(middlewares.logging)        //Logging Middlewares  =======>Create our own Middlewares
    app.use(middlewares.maintance)      //Maintanance MiddleWares  =======>Create our own Middlewares
    console.log("middleware inilized")

    // Current  Data-time  ===> Giving url on Middlewares
    app.use('/server-time', (req, res, next) => res.send({ date: new Date() }))

    app.get('/', (req, res) => {
        res.send("Welcome to back end!")
    })
    app.use(commentsRoute)
    app.use('/posts', postsRoute)
    app.use(usersRoute)

    app.listen(PORT, () => { console.log(`Server listening port-${PORT}`) })   

} 
start()

     

    
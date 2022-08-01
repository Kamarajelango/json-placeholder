

const middlewares = {
    logging(req, res, next) {
        console.log(`${new Date()} - ${req.method} - ${req.url}`)
        next()
    },
    maintance(req,res,next) {
       process.env.IS_MAINTANCE == "true" ? res.send({ message: "Site is under maintanance" }) : next()
    }
}

module.exports = middlewares
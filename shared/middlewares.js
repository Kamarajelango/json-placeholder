const IS_MAINTANCE = false;

const middlewares = {
    logging(req, res, next) {
        console.log(`${new Date()} - ${req.method} - ${req.url}`)
        next()
    },
    maintance(req,res,next) {
        IS_MAINTANCE ? res.send({ message: "Site is under maintanance" }) : next()
    }
}

module.exports = middlewares
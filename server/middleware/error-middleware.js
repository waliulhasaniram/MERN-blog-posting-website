const errorMiddleware =(err, req, res, next)=>{
    const status = err.status || 422
    const message = err.message || "fill all the input"
    const extraMessage = err.extraMessage || "internal server error"
    
    return res.status(status).json({message, extraMessage})
}

module.exports = errorMiddleware
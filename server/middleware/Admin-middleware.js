const adminMiddleware =(req, res, next)=>{
    try {
        const isAdminRole = req.user.isAdmin
        if(!isAdminRole){
            res.status(400).json({msg:'user is not admin'})
        }
        next()
    } catch (error) {
        console.log(error)
    }
}
module.exports = adminMiddleware
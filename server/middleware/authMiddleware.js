require('dotenv').config()
const jwt = require('jsonwebtoken')
const database_iram = require('../models/auth-model')


const authMiddleware =async(req, res, next)=>{
    const token = req.header("Authorization")

    if(!token){
        res.status(400).json({msg:"unauthorized HTTP request, token not found"})
    }else{
        const jwtToken = token.replace('Bearer ','').trim()
        try {
            const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY) 
            const userData = await database_iram.findOne({email: isVerified.email}).select({password:0})

            req.user = userData
            req.token = token
            req.userID = userData._id
            
            next()
        
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

module.exports = authMiddleware
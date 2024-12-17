const database_iram = require("../models/auth-model")
const bcrypt = require('bcryptjs')

const Home =(req, res)=>{
    res.status(200).json("this is home")
}

const register =async(req, res)=>{
    try {
        const {username, email, password, phone} = req.body
        const userExists = await database_iram.findOne({email: email})

        if(userExists){
            res.status(200).json("user already exists")
        }else{
            const createUser = await database_iram.create({username, email, password, phone})
            //console.log(createUser)
            res.status(202).json({msg: createUser, token: await createUser.generateToken(), _id:createUser.id.toString()}) // generate token in auth-model
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

const login =async(req, res)=>{
    try {
        const {email, password} = req.body
        const userExists = await database_iram.findOne({email: email})
        if(!userExists){
            res.status(400).json("user doesn't exist")
        }else{
            const comparePassword = await bcrypt.compare(password, userExists.password)
            if(comparePassword){
                res.status(200).json({msg: "login successful", token: await userExists.generateToken(), _id:userExists._id.toString()})
            }else{
                res.status(400).json({msg: "invalid credentials"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const user =async(req, res)=>{
    try {
        const userData = req.user // req.user is coming from authMiddleware
        res.status(200).json({userData})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
}

module.exports = {Home, register, login, user}
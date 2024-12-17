const database_iram = require("../models/auth-model")
const contact = require("../models/contact-model")
const bolg_data = require("../models/blog-model")


const getAllUser =async(req, res)=>{
    try {
        const allUserData = await database_iram.find({},{password:0})
        if(!allUserData || allUserData.length === 0){
            res.status(200).send({msg:'no user data available'})
        }else{
            res.status(200).json({allUserData})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllContact =async(req, res)=>{
    try {
        const allContactData = await contact.find()
        if(!allContactData || allContactData.length === 0){
            res.status(200).send({msg:'no contact data available'})
        }else{
            res.status(200).json({allContactData})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllBlogs =async(req, res)=>{
    try {
        const allBlogsData = await bolg_data.find()
        if(!allBlogsData || allBlogsData.length === 0){
            res.status(200).json({msg: 'no blog data available'})
        }else{
            res.status(200).json({allBlogsData})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

/// detele 
const deleteOneUser =async(req, res)=>{
    try {
        const id = req.params.id
        await database_iram.deleteOne({_id:id})
        res.status(200).json({msg: "one user deleted successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteOneContact =async(req, res)=>{
    try {
        const id = req.params.id
        await contact.deleteOne({_id:id})
        res.status(200).json({msg: "one contact deleted successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteOneBlog =async(req, res)=>{
    try {
        const id = req.params.id
        await bolg_data.deleteOne({_id:id})
        res.status(200).json({msg: "one blog deleted successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUser =async(req, res)=>{
    try {
        const id = req.params.id
        const updateUserData = req.body
        const userUpdata = await database_iram.updateOne({_id:id}, {$set: updateUserData})
        res.status(200).json({userUpdata}) 
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllUser, getAllContact, getAllBlogs, deleteOneUser, deleteOneContact, deleteOneBlog, updateUser}
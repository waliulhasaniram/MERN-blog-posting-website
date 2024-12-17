const bolg_data = require("../models/blog-model")

const createBlogs =async(req, res)=> {
    try {
        const {username, email, blog} = req.body
        const createBlog = await bolg_data.create({username, email, blog})
        res.status(200).json({createBlog})
        
    } catch (error) {
        console.log(error)
    }
}

const getBlogs =async(req, res)=>{
    try {
        const allBlogData = await bolg_data.find()
        if(!allBlogData || allBlogData.length === 0){
            res.status(200).json({msg: 'blogs data unvailable'})
        }else{
            res.status(200).json({allBlogData})
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getUserBlogOnly =async(req, res)=>{ // show blog in profile
try {
    const loggedInUser = req.user // req.user is coming from authMiddleware
    const blogEmail = await bolg_data.find({email: loggedInUser.email}) //finding all user blogs from loggedInUser's email
    
    res.status(200).json({blogEmail}) 

} catch (error) {
    console.log(error)
}
}

const getBlogId =async(req, res)=>{ // get data to update and set in the update form
    try {
        const id = req.params.id
        const theBlogData = await bolg_data.findOne({_id:id})
        res.status(200).json({theBlogData})
    } catch (error) {
        console.log(error)
    }
}

const updateBlog =async(req, res)=>{
    try {
        const id = req.params.id
        const updateBlogData = req.body
        const updateBlog = await bolg_data.updateOne({_id:id}, {$set: updateBlogData})
        res.status(200).json({updateBlog})
    } catch (error) {
        console.log(error)
    }
}

const deleteBlog =async(req, res)=>{
    try {
        const id = req.params.id 
        await bolg_data.deleteOne({_id:id})
        res.status(200).json({msg: "one blog deleted successfully"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createBlogs, getBlogs, getUserBlogOnly, getBlogId, updateBlog, deleteBlog}
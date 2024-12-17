const contact = require("../models/contact-model")

const contactController =async(req, res)=>{
    try {
        const {username, email, message} = req.body
        const createContact = await contact.create({username, email, message})
        res.status(200).json({createContact})
    } catch (error) {
        console.log(error)
    }
}

module.exports = contactController
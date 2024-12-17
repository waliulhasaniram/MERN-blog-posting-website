const {Schema, model} = require('mongoose')

const contactSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true}, 
    message: {type:String, required: true}  
})

const contact = new model('contact', contactSchema)
module.exports = contact
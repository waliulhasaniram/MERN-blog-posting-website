const {Schema, model} = require('mongoose')

const blogSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true}, 
    blog: {type: String, required: true}
})

const bolg_data = new model('blog', blogSchema)
module.exports = bolg_data
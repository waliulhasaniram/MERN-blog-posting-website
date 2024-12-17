const {Schema, model}  = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const databaseSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

databaseSchema.pre("save", async function (next) { //hashing password
    try {
        if(this.isModified('password')){
            this.password = await bcrypt.hash(this.password, 12)
            next()
        }
    } catch (error) {
        console.log(error)
    }
})
databaseSchema.methods.generateToken = async function () { //generate token
    try {
        return jwt.sign({_id: this._id.toString(), email: this.email, isAdmin: this.isAdmin}, process.env.SECRET_KEY, {expiresIn:'30d'})
    } catch (error) {
        console.log(error)
    }
}


const database_iram = new model('database_iram', databaseSchema)

module.exports = database_iram
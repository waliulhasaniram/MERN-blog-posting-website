require('dotenv').config()
const mongoose = require('mongoose')

const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_NAME)
        console.log("successfully connected to the  database")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
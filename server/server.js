const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-route')
const blogRouter = require('./router/blog-router')
const adminRouter = require('./router/Admin-router')
const connectDB = require('./utils/db')
const errorMiddleware = require('./middleware/error-middleware')
const cors = require('cors')

const corsOptoin = {
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
    credentials: true
}
app.use(cors(corsOptoin))

app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/data', contactRouter)
app.use('/api/main', blogRouter)
app.use('/api/admin', adminRouter)

app.use(errorMiddleware)

connectDB().then(()=> {
    app.listen(port , ()=>{
        console.log(`this is the server>> http://localhost:${port}`)
    })

})
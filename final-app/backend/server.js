const express = require('express')
const cors = require('cors')

require('dotenv').config()
const mongoConfig = require('./config')

// import ROUTES
const ratingRoutes = require('./routes/ratingRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

const { authorize } = require('./middleware/authMiddleware')

// create express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    //console.log(req.path, req.method)
    next()
})

// Middleware for ROUTES
app.use('/auth', authRoutes)
app.use('/', authorize, ratingRoutes)
app.use('/user', authorize, userRoutes)

//listen on port
app.listen(process.env.PORT, () => {
    console.log('Listening on port...')
    mongoConfig()
})

const express = require('express')
const cors = require('cors')
require('dotenv').config()

const mongoConfig = require('./config')

// imports
const ratingRoutes = require('./routes/ratingRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

// create express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    //console.log(req.path, req.method)
    next()
})

// ROUTES
app.use('/auth', authRoutes)
app.use('/rate-my-tutorial', ratingRoutes)
app.use('/rate-my-tutorial/users', userRoutes)

//listen on port
app.listen(process.env.PORT, () => {
    console.log('listening on port 8080...')
    mongoConfig()
})
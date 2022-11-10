const User = require('../models/User')

// specific user info
const profile = async (req, res) => {
    // req.params.username
    // req.userId
    console.log('made it to our route!')
    console.log('user id:', req.userId)
    try {
        const foundUser = await User.findById(req.userId)
        
        res.status(200).json({ 
            username: foundUser.username, 
            email: foundUser.email 
        })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//GET all users
const allUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }   
}

//Delete all users
const clear = async (req, res) => {
    try {
        await User.deleteMany({})
        res.status(200).json({ msg: 'All users have been deleted '})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    profile,
    allUsers,
    clear
}
const User = require('../models/User')

// GET specific user info
const info = async (req, res) => {
    // req.params.username
    // req.userId
    //console.log('made it to our route!')
    //console.log('user id:', req.userId)

    //console.log(req.header("Authorization"))

    try {
        // const foundUser = await User.findById(req.userId)
        const foundUser = await User.findOne({ username: req.params.username})

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

// DELETE specific user
const clearOne = async (req, res) => {
    try {
        await User.findOneAndDelete({ username: req.params.username})
        res.status(200).json({ msg: 'User has been deleted '})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    info,
    allUsers,
    clear,
    clearOne
}
const Rating = require('../models/Rating')
const User = require('../models/User')

// GET all ratings (home page)
const getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find({}).sort({ createdAt: -1 })
        res.status(200).json(ratings)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//GET single rating
const getRating = async (req, res) => {
    const { id } = req.params

    try {
        const rating = await Rating.findById(id)
        res.status(200).json(rating)
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
}

// CREATE a new rating
const createRating = async (req, res) => {
    const { cost, type, platform, link, title, notes, user } = req.body
    //console.log(user)
    //console.log(req.user)
    //console.log(req.body)

    try {
        const rating = await Rating.create({ cost, type, platform, title, link, notes, user })
        res.status(200).json(rating)
        console.log(rating)
    } catch (error) {
        res.status(400).json({ error: 'Unable to submit. Please complete all fields' })
    }
}

// // DELETE a rating
// const deleteRating = async (req, res) => {
//     const { id } = req.params
//     try {
//         const rating = await Rating.findOneAndDelete({_id: id})
//         res.status(200).json(rating)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

// DELETE rating made by user only
const remove = async (req, res) => {
    const { id } = req.params
    try {
        //console.log(req.user)
        const rating = await Rating.findOne({ _id: id })
        //console.log(rating.user)
        if (rating.user !== req.user) {
            res.status(401).json({ error: 'Not authorized to delete' })
        } else {
            const rating = await Rating.findOneAndDelete({ _id: id })
            res.status(200).json(rating)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// UPDATE

const updateRating = async (req, res) => {
    console.log(1)
    const { id } = req.params
    try {
        const rating = await Rating.findByIdAndUpdate({ _id: id }, {
            ...req.body
        })
        if (rating.user !== req.user) {
            res.status(401).json({ error: 'Not authorized to change' })
        } else {
            res.status(200).json(rating)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Get ratings for current user (profile page)
const profileRatings = async (req, res) => {
    try {
        const foundCurrentUsersRatings = await Rating.find({ user: req.user }).sort({ createdAt: -1 })
        res.status(200).json({ rating: foundCurrentUsersRatings })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//(add page)
const add = async (req, res) => {
    try {
        const createdRatingForCurrentUser = await Rating.create(req.body)
        res.status(200).json({ rating: createdRatingForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createRating,
    getRating,
    getAllRatings,
    // deleteRating,
    updateRating,
    profileRatings,
    add,
    remove
}
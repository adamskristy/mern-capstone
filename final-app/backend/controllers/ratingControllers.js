const Rating = require('../models/Rating')

// GET all ratings
const getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find({}).sort({createdAt: -1})
        res.status(200).json(ratings) 
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}
       

//GET single rating
const getRating = async (req, res) => {
    const { id } = req.params

        try {
            const rating = await Rating.findById(id)
            res.status(200).json(rating)
        } catch(error){
                return res.status(404).json({error: "Item not found"})
        }
}

// CREATE a new rating
const createRating = async (req, res) => {
    const {cost, type, platform, link, title, notes, stars} = req.body

        try {
            const rating = await Rating.create({cost, type, platform, title, link, notes, stars})
            res.status(200).json(rating)
            console.log(rating)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
}

// DELETE a rating
const deleteRating = async (req, res) => {
    const { id } = req.params

        try {
            const rating = await Rating.findOneAndDelete({_id: id})
            res.status(200).json(rating)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }   
}

// UPDATE

const updateRating = async (req, res) => {
    const { id } = req.params
    try {
        const rating = await Rating.findByIdAndUpdate({_id: id}, {
            ...req.body
        })
            res.status(200).json(rating)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get ratings for current user (profile page)
const profileRatings = async (req, res) => {
    try {
        const foundCurrentUsersRating = await Rating.find({ user: req.user })
        res.status(200).json({ rating: foundCurrentUsersRating })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//create ratings for current user
const add = async (req, res) => {
    try {
        const createdRatingForCurrentUser = await Rating.create(req.body) 
        res.status(200).json({ todo: createdRatingForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createRating,
    getRating,
    getAllRatings,
    deleteRating,
    updateRating,
    profileRatings,
    add 
}
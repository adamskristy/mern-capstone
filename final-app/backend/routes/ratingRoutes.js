const express = require('express')
const router = express.Router()

const { 
    createRating,
    getRating,
    getAllRatings,
    deleteRating,
    updateRating,
    profileRatings,
    add  
} = require('../controllers/ratingControllers')


// GET all rating
router.get('/', getAllRatings)

// GET single rating
router.get('/:id', getRating )

// CREATE / POST a new rating //
router.post('/', createRating)

// DELETE a rating
router.delete('/:id', deleteRating)

// UPDATE a rating
router.patch('/:id', updateRating)

// GET profile rating
router.get('/profile/:id', profileRatings)

// CREATE rating for specific user //
router.post('/', add)

module.exports = router
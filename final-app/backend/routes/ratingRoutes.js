const express = require('express')
const router = express.Router()
//const ratingCtrl = require('../controllers/ratingControllers')

//router.get('/add', ratingCtrl.add)
//router.get('/profile', ratingCtrl.profileRatings)
//router.get('/', ratingCtrl.getAllRatings)


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

/////////////////////////////

// GET profile rating
router.get('/:user/index', profileRatings)

// CREATE rating for specific user // fix this !!
router.post('/add', add)

module.exports = router
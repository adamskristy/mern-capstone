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
    // deleteRating,
    updateRating,
    profileRatings,
    add,
    remove  
} = require('../controllers/ratingControllers')


// GET all rating
router.get('/', getAllRatings)

// GET single rating
router.get('/:id', getRating )

// CREATE / POST a new rating 
router.post('/', createRating)

// // DELETE a rating
// router.delete('/:id', deleteRating)

// UPDATE a rating
router.patch('/:id', updateRating)

/////////////////////////////

// GET specific ratings by user
router.get('/:username/index', profileRatings)

// add ---> in use ??
router.post('/add', add)

router.delete('/:id/remove', remove)

module.exports = router
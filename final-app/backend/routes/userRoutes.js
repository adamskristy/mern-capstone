const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/profile', userCtrl.profile)
router.delete('/clear', userCtrl.clear)
router.get('/all', userCtrl.allUsers)

module.exports = router
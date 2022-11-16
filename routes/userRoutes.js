const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/info/:username', userCtrl.info)
router.delete('/clear', userCtrl.clear)
router.get('/all', userCtrl.allUsers)
router.delete('/info/:username/ban', userCtrl.clearOne)

module.exports = router
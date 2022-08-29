import express from 'express'
const router = express.Router()

// create user
const userCreateRoute = require('../routes/user/userCreate')
router.post('/user/create', userCreateRoute.createUser)

module.exports = router
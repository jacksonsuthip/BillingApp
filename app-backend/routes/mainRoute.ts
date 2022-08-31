import express from 'express'
const router = express.Router()

// create user
import userCreateRoute from '../routes/user/userCreate';
router.post('/user/create', userCreateRoute)

export default router;
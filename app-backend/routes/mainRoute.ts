import express from 'express'
const router = express.Router()

// create user
import userCreateRoute from '../routes/user/userCreate';
router.post('/user/create', userCreateRoute)

import getAllUsers from '../routes/user/getAllUsers';
router.get('/user/get-all', getAllUsers)

export default router;
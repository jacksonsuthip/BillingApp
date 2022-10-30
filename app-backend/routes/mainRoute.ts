import express from 'express'
const router = express.Router()

// create user
import userCreateRoute from '../routes/user/userCreate';
router.post('/user/create', userCreateRoute)

import getAllUsers from '../routes/user/getAllUsers';
router.get('/user/get-all', getAllUsers)

import getUserName from '../routes/user/getUserName'
router.get('/user/uname', getUserName)

import userLogin from '../routes/user/userLogin'
router.get('/user/login', userLogin)

export default router;
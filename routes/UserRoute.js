import express from 'express'
import { getUsers, getUsersById } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users', getUsers)
router.get('/users', getUsersById)

export default router

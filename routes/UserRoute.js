import express from 'express'
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser
} from '../controllers/UserController.js'

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)

export default router

import { Router } from 'express'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller'

const router = Router()

// Get all users
router.get('/', getUsers)

// Get user by id
router.get('/:id', getUserById)

// Create new user
router.post('/', createUser)

// Update user
router.patch('/:id', updateUser)

// Delete user
router.delete('/:id', deleteUser)

export default router

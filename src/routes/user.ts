import { Router } from 'express'
import { UserController } from '../controllers/user'

export const userRoutes = Router()
userRoutes.get('/', UserController.getAllUsers)
userRoutes.post('/', UserController.createUser)

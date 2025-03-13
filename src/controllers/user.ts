import { Request, Response } from 'express'
import { UserService } from '../services/user'

export const UserController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers()
      res.json(users)
    } catch (error) {
      res.json(error)
    }
  },
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body
      const user = await UserService.createUser(name, email)
      res.json(user)
    } catch (error) {
      res.json(error)
    }
  },
}

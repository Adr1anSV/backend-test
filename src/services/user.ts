import { db } from '../config/database'
import { User } from '../models/user'

export const UserService = {
  async getAllUsers(): Promise<User[]> {
    return db.any('SELECT * FROM users')
  },
  async createUser(name: string, email: string): Promise<User> {
    return db.one('INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [name, email])
  },
}

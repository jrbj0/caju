import { Request, Response } from 'express'

import { User } from '../schemas/User'

class UserController {
  public async listAllUsers (req: Request, res: Response): Promise<Response> {
    // Lista todos os usuários

  }
}

export default new UserController()

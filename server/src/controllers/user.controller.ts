import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service.js';

const UserController = {
  getCurrentUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
  getUserById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
};

export default UserController;

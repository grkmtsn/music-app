import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/auth.service.js';

const AuthController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loggedInUser = await AuthService.login(req.body);
      req.user = loggedInUser.userWithPassword;
      req.auth = {
        _id: req.user._id,
        register: false
      };
      next();
    } catch (error) {
      next(error);
    }
  },
  logout: (_req: Request, res: Response) => {
    res.send({ message: 'Token blacklisted. User logged out.' });
  },
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const savedUser = await AuthService.register(req.body);
      req.user = savedUser;
      req.auth = {
        _id: req.user._id,
        register: true
      };
      next();
    } catch (error) {
      next(error);
    }
  }
};

export default AuthController;

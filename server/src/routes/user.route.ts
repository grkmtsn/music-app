import express from 'express';

import UserController from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/AuthenticateToken.js';

const userRouter = express.Router();

userRouter.get('/me', authenticateToken, UserController.getCurrentUser);
userRouter.get('/:id', authenticateToken, UserController.getUserById);

export default userRouter;

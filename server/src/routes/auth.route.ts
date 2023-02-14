import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import TokenUtils from '../utils/token.js';
import { blackListToken } from '../middlewares/BlacklistToken.js';
import { authenticateToken } from '../middlewares/AuthenticateToken.js';

const authRouter = express.Router();

authRouter.get('/token-status', authenticateToken, (req, res) => {
  res.status(200).json({
    status: 'success'
  });
});
authRouter.post('/login', AuthController.login, TokenUtils.generateToken, TokenUtils.sendToken);
authRouter.post('/register', AuthController.register, TokenUtils.generateToken, TokenUtils.sendToken);
authRouter.delete('/logout', blackListToken, AuthController.logout);

export default authRouter;

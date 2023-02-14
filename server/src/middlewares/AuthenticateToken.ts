/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/error.js';
import AuthService from '../services/auth.service.js';
import UserSerive from '../services/user.service.js';

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const bearer = authHeader && authHeader.split(' ')[0];
    if (bearer != 'Bearer') throw new AppError(401, 'Unauthorized');

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) throw new AppError(401, 'Unauthorized');

    const blackListToken = await AuthService.getBlackListToken(token);
    if (blackListToken) throw new AppError(401, 'Token blacklisted. Cannot use this token.');

    jwt.verify(token, process.env.JWT_SECRET!, {}, async (err, payload) => {
      if (err) {
        throw new AppError(403, 'Token can not be verified.');
      }
      if (payload) {
        const login = await AuthService.getUserLogin({
          userId: (payload as JwtPayload)._id,
          tokenId: (payload as JwtPayload).tokenId
        });

        if (login?.tokenDeleted) {
          await AuthService.createBlackListToken(token);
          throw new AppError(401, 'Unauthorized');
        }

        const user = await UserSerive.getUserById((payload as JwtPayload)._id);
        req.user = user!;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

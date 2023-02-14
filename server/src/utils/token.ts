/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import AuthService from '../services/auth.service.js';

const createToken = async (req: Request) => {
  const tokenId = new mongoose.Types.ObjectId();
  const tokenSecret = new mongoose.Types.ObjectId();
  const device = req.headers['user-agent'];

  const { headers } = req;
  const ipAddress =
    req.ip || ((headers['x-forwarded-for'] || '') as string).split(',').pop()?.trim() || req.socket.remoteAddress || '';
  const userLoginsParams = {
    userId: req.auth._id,
    ipAddress,
    device
  };
  const userLogins = await AuthService.getAllUserLogins(userLoginsParams);
  const loginPromises = userLogins.map((login) => {
    if (login) {
      login.tokenDeleted = true;
      return login.save();
    }
  });
  await Promise.all(loginPromises);

  await AuthService.addUserLogin({ userId: req.auth._id, tokenId, tokenSecret, ipAddress, device });

  const tokenUser = {
    _id: req.auth._id,
    tokenId: tokenId
  };
  const accessToken = jwt.sign(tokenUser, process.env.JWT_SECRET!);
  return accessToken;
};

export default {
  generateToken: async (req: Request, _res: Response, next: NextFunction) => {
    req.token = await createToken(req);
    return next();
  },
  sendToken: (req: Request, res: Response) => {
    let message = '';
    if (req.auth.register == false) {
      message = 'user found & logged in';
    } else {
      message = 'user created';
    }
    const responseObject = { auth: true, token: req.token, message, user: req.user };
    return res.status(200).json(responseObject);
  }
};

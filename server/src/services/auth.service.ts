/* eslint-disable @typescript-eslint/no-non-null-assertion */
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';

import { AppError } from '../utils/error.js';

import UserService from '../services/user.service.js';

import UserModel from '../models/user.model.js';
import UserLoginsModel from '../models/userLogins.model.js';
import blackListTokenModel from '../models/blackListToken.model.js';

type ILogin = {
  email: string;
  password: string;
};

type IRegister = {
  username: string;
  email: string;
  password: string;
};

type IUserLogin = {
  userId: Types.ObjectId;
  tokenId: Types.ObjectId;
  tokenSecret: Types.ObjectId;
  ipAddress: string;
  device?: string;
};

type IUserLoginParams = {
  userId: Types.ObjectId;
  ipAddress: string;
  device?: string;
};

const AuthService = {
  login: async (payload: ILogin) => {
    const { email, password } = payload;

    const user = await UserService.getUserByEmail(email);
    if (!user) throw new AppError(404, 'User does not exiest');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new AppError(403, 'Invalid credentials.');

    const userWithoutPassword: Omit<Models.IUser, 'password'> = {
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImagePath: user.profileImagePath,
      playlistIds: user.playlistIds,
      favouriteSongIds: user.favouriteAlbumIds,
      favouriteAlbumIds: user.favouriteAlbumIds
    };
    return {
      userWithPassword: user,
      userWithoutPassword
    };
  },
  register: async (payload: IRegister) => {
    const { username, email, password } = payload;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = {
      username,
      email,
      password: passwordHash
    };

    return await UserModel.create(newUser);
  },
  addUserLogin: async (payload: IUserLogin) => {
    return await UserLoginsModel.create(payload);
  },
  getAllUserLogins: async (params: IUserLoginParams) => {
    const { userId, ipAddress, device } = params;
    return await UserLoginsModel.find({
      userId,
      ipAddress,
      device,
      tokenDeleted: false
    }).exec();
  },
  getUserLoginById: async (id: string) => {
    return await UserLoginsModel.findById(id).exec();
  },
  getUserLogin: async (params: any) => {
    return await UserLoginsModel.findOne({ ...params }).exec();
  },
  getBlackListToken: async (token: string) => {
    return await blackListTokenModel.findOne({ token }).exec();
  },
  createBlackListToken: async (token: string) => {
    return await blackListTokenModel.create({ token });
  }
};

export default AuthService;

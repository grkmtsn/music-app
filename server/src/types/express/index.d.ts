import * as express from 'express';
import { Types } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      token: string;
      user: Models.IUser;
      auth: {
        _id: Types.ObjectId;
        register: boolean;
      };
    }
  }
}

export type ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => any;

import { Types } from 'mongoose';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    _id: string;
    tokenId: Types.ObjectId;
  }
}

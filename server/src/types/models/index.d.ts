declare namespace Models {
  import { Types } from 'mongoose';
  const { ObjectId } = Types;

  interface IUser {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    profileImagePath: string;
    playlistIds: ObjectId[];
    favouriteSongIds: ObjectId[];
    favouriteAlbumIds: ObjectId[];
  }
}

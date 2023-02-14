import mongoose from 'mongoose';

import { validateEmail } from '../utils/validations.js';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'required field.'],
      minlength: [6, 'too short. it must be at least 6.'],
      maxlength: [50, 'too long. it must be at most 6.']
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    profileImagePath: {
      type: String,
      default: ''
    },
    playlistIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
      }
    ],
    favouriteSongIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Song'
      }
    ],
    favouriteAlbumIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Album'
      }
    ],
    resetPasswordToken: String,
    resetPasswordExpires: Date
  },
  { timestamps: true }
);

const model = mongoose.model('User', userSchema);
export default model;

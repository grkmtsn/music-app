import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100
    },
    coverImagePath: {
      type: String,
      default: ''
    },
    albums: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Album'
      }
    ],
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Song'
      }
    ],
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
      }
    ],
    listenerCount: Number,
    followerCount: Number
  },
  { timestamps: true }
);

const model = mongoose.model('Artist', artistSchema);
export default model;

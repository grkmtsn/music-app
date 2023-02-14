import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 255
    },
    coverImagePath: String,
    artist: {
      type: Schema.Types.ObjectId,
      ref: 'Artist'
    },
    featuringArtists: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
      }
    ],
    album: {
      type: Schema.Types.ObjectId,
      ref: 'Album'
    },
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        required: true
      }
    ],
    duration: Number,
    listenCount: Number,
    likeCount: Number
  },
  { timestamps: true }
);

const model = mongoose.model('Song', songSchema);
export default model;

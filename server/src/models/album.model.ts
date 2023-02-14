import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const albumSchema = new Schema(
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
    likeCount: Number,
    description: String,
    coverBannerPath: String
  },
  { timestamps: true }
);

const model = mongoose.model('Album', albumSchema);
export default model;

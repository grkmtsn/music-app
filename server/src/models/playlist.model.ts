import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 255
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Song'
      }
    ]
  },
  { timestamps: true }
);

const model = mongoose.model('Playlist', playlistSchema);
export default model;

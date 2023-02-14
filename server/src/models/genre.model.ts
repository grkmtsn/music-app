import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const genreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100
    },
    description: {
      type: String,
      min: 2,
      max: 255
    }
  },
  { timestamps: true }
);

const model = mongoose.model('Genre', genreSchema);
export default model;

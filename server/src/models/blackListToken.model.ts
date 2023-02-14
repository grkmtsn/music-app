import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blackListTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const model = mongoose.model('BlackListToken', blackListTokenSchema);
export default model;

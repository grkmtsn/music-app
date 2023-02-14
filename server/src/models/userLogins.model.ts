import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userLoginsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    loggedOut: {
      type: Boolean
    },
    loggedInAt: {
      type: Date,
      required: true,
      default: Date.now()
    },
    ipAddress: String,
    tokenId: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true
    },
    tokenSecret: Schema.Types.ObjectId,
    tokenDeleted: Boolean,
    device: String
  },
  { timestamps: true }
);

const model = mongoose.model('UserLogins', userLoginsSchema);
export default model;

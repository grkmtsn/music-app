import mongoose from 'mongoose';
import config from '../config/index.js';

export default async (): Promise<void> => {
  await mongoose.connect(config.mongoUri);
};

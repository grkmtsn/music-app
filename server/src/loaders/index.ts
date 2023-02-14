import { Express } from 'express';
import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';
import Logger from './logger.js';

export default async ({ expressApp }: { expressApp: Express }) => {
  await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT!, 10),
  mongoUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gk79nps.mongodb.net/?retryWrites=true&w=majority`,
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
  api: {
    prefix: '/api'
  }
};

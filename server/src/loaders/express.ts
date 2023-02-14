/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Express, NextFunction, Response, Request } from 'express';
import cors from 'cors';

import Logger from '../loaders/logger.js';
import { AppError } from '../utils/error.js';

import authRoutes from '../routes/auth.route.js';
import userRoutes from '../routes/user.route.js';
import genreRoutes from '../routes/genre.route.js';
import artistRoutes from '../routes/artist.route.js';
import songRoutes from '../routes/song.route.js';
import albumRoutes from '../routes/album.route.js';

export default ({ app }: { app: Express }) => {
  app.get('/status', (_req, res) => {
    res.status(200).end();
  });
  app.head('/status', (_req, res) => {
    res.status(200).end();
  });

  app.use(
    cors({
      credentials: true
    })
  );
  app.use(express.json());

  app.use('/auth', authRoutes);
  app.use('/user', userRoutes);
  app.use('/genre', genreRoutes);
  app.use('/artist', artistRoutes);
  app.use('/song', songRoutes);
  app.use('/album', albumRoutes);

  app.use((_req: Request, _res: Response, next: NextFunction) => {
    const err = new AppError(404, 'Not Found');
    next(err);
  });

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    Logger.error(err);
    res.status(err.statusCode || 500);
    res.json({
      error: {
        message: err.message,
        status: err.status,
        statusCode: err.statusCode
      }
    });
  });
};

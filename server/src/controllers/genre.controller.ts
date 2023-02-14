import { Request, Response, NextFunction } from 'express';
import GenreService from '../services/genre.service.js';

const GenreController = {
  getAllGenres: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const genres = await GenreService.getAllGenres();
      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  },
  createGenre: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const genre = await GenreService.createGenre(payload);
      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }
};

export default GenreController;

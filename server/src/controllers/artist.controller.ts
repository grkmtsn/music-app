import { Request, Response, NextFunction } from 'express';
import ArtistService from '../services/artist.service.js';

const ArtistController = {
  createGenre: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const artist = await ArtistService.createArtist(payload);
      res.status(200).json(artist);
    } catch (error) {
      next(error);
    }
  }
};

export default ArtistController;

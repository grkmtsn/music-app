import { Request, Response, NextFunction } from 'express';
import SongService from '../services/song.service.js';

const SongController = {
  createSong: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const song = await SongService.createSong(payload);
      res.status(200).json(song);
    } catch (error) {
      next(error);
    }
  }
};

export default SongController;

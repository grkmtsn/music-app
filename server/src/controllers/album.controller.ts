import { Request, Response, NextFunction } from 'express';
import AlbumService from '../services/album.service.js';

const AlbumController = {
  createAlbum: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const album = await AlbumService.createAlbum(payload);
      res.status(200).json(album);
    } catch (error) {
      next(error);
    }
  },
  getAlbums: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const albums = await AlbumService.getAlbums();
      res.status(200).json(albums);
    } catch (error) {
      next(error);
    }
  }
};

export default AlbumController;

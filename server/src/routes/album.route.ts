import express from 'express';

import AlbumController from '../controllers/album.controller.js';
import { authenticateToken } from '../middlewares/AuthenticateToken.js';

const albumRouter = express.Router();

albumRouter.post('/create', authenticateToken, AlbumController.createAlbum);
albumRouter.get('/', authenticateToken, AlbumController.getAlbums);

export default albumRouter;

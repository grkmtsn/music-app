import express from 'express';

import SongController from '../controllers/song.controller.js';
import { authenticateToken } from '../middlewares/AuthenticateToken.js';

const songRouter = express.Router();

songRouter.post('/create', authenticateToken, SongController.createSong);

export default songRouter;

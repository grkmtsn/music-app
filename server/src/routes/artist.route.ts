import express from 'express';

import ArtistController from '../controllers/artist.controller.js';
import { authenticateToken } from '../middlewares/AuthenticateToken.js';

const artistRouter = express.Router();

artistRouter.post('/create', authenticateToken, ArtistController.createGenre);

export default artistRouter;

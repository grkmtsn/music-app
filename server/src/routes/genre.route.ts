import express from 'express';

import GenreController from '../controllers/genre.controller.js';
import { authenticateToken } from '../middlewares/AuthenticateToken.js';

const genreRouter = express.Router();

genreRouter.get('/', authenticateToken, GenreController.getAllGenres);
genreRouter.post('/create', authenticateToken, GenreController.createGenre);

export default genreRouter;

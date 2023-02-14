import GenreModel from '../models/genre.model.js';

type IGenrePayload = {
  name: string;
  description: string;
};

const GenreService = {
  getAllGenres: async () => {
    return await GenreModel.find();
  },
  createGenre: async (payload: IGenrePayload) => {
    return await GenreModel.create(payload);
  }
};

export default GenreService;

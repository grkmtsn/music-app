import ArtistModel from '../models/artist.model.js';

type IArtistPayload = {
  name: string;
  coverImagePath: string;
  genres: string[];
};

const ArtistService = {
  createArtist: async (payload: IArtistPayload) => {
    return await ArtistModel.create(payload);
  }
};

export default ArtistService;

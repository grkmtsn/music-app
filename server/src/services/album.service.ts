import { Types } from 'mongoose';
import AlbumModel from '../models/album.model.js';
import SongModel from '../models/song.model.js';
import SongService from './song.service.js';

type IAlbumPayload = {
  name: string;
  coverImagePath: string;
  songs: Types.ObjectId[];
  artist: Types.ObjectId;
};

const AlbumService = {
  createAlbum: async (payload: IAlbumPayload) => {
    if (payload.songs?.length > 0) {
      const genres = await SongService.getGenresBySongIds(payload.songs);
      const album = await AlbumModel.create({ ...payload, genres });
      await Promise.all(album.songs.map((song) => SongModel.updateOne({ _id: song._id }, { album: album._id })));
      return album;
    } else {
      const album = await AlbumModel.create(payload);
      return album;
    }
  },
  getAlbums: async () => {
    return await AlbumModel.find()
      .populate({ path: 'artist', populate: { path: 'genres' } })
      .populate({ path: 'songs', populate: { path: 'genres' } })
      .exec();
  }
};

export default AlbumService;

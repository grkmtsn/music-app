/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Types } from 'mongoose';

import SongModel from '../models/song.model.js';
import AlbumModel from '../models/album.model.js';

type ISongPayload = {
  name: string;
  coverImagePath: string;
  genres: string[];
  artist: string;
  featuringArtists: string[];
  duration: number;
  album: Types.ObjectId;
};

const SongService = {
  createSong: async (payload: ISongPayload) => {
    const song = await SongModel.create(payload);
    if (payload.album) {
      await AlbumModel.updateOne(
        { _id: payload.album },
        { $push: { songs: song._id }, $addToSet: { genres: { $each: payload.genres } } }
      );
    }
    return song;
  },
  getGenresBySongIds: async (songIds: Types.ObjectId[]): Promise<Types.ObjectId[]> => {
    const songs = await Promise.all(songIds.map((id) => SongModel.findById(id)));
    const genres = songs.map((song) => song!.genres).flat();
    const uniqGenres = genres.filter((item, index) => genres.indexOf(item) === index);
    return uniqGenres;
  }
};

export default SongService;

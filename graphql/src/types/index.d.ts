import AuthApi from '../dataSources/AuthApi.js';
import UserApi from '../dataSources/UserApi.js';
import AlbumApi from '../dataSources/AlbumApi.js';

export declare global {
  namespace API {
    interface ILoginBody {
      email: string;
      password: string;
    }

    interface IRegisterBody {
      username: string;
      email: string;
      password: string;
    }

    interface IUser {
      _id: string;
      username: string;
      email: string;
      profileImagePath: string;
      playlistIds: string[];
      favouriteSongIds: string[];
      favouriteAlbumIds: string[];
    }

    interface IAuth {
      token: string;
      auth: boolean;
      message: string;
    }

    interface IAlbum {
      name: string;
      coverImagePath: string;
      artist: IArtist;
      songs: ISong[];
      genres: IGenre[];
    }

    interface IArtist {
      name: string;
      coverImagePath: string;
      albums: IAlbum[];
      songs: ISong[];
      genres: IGenre[];
      listenerCount: number;
      followerCount: number;
    }

    interface ISong {
      name: string;
      coverImagePath: string;
      artist: IArtist;
      featuringArtists: IArtist[];
      album: IAlbum;
      genres: IGenre[];
      duration: number;
      listenCount: number;
      likeCount: number;
    }

    interface IGenre {
      name: string;
      description: boolean;
    }
  }

  namespace APP {
    interface DataSource {
      AuthApi: AuthApi;
      UserApi: UserApi;
      AlbumApi: AlbumApi;
    }

    interface MyContext {
      dataSources: DataSource;
    }
  }
}

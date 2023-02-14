import { createResource } from "solid-js";
import { client } from "..";

export type IAlbum = {
  _id: string;
  name: string;
  coverImagePath: string;
  coverBannerPath: string;
  description: string;
  artist: {
    name: string;
  };
  songs: {
    _id: string;
    name: string;
  }[];
};

const ALBUM_QUERY = `
  query GetAlbums {
    albums: getAlbums {
      _id
      name
      coverImagePath
      coverBannerPath
      description
      artist {
        name
        genres {
          _id
          name
        }
      }
      songs {
        _id
        name
      }
    }
  }
`;

export default () => {
  return createResource<IAlbum[]>(() =>
    client
      .query(ALBUM_QUERY, {})
      .toPromise()
      .then(({ data }) => data.albums)
  );
};

export const modelTypeDefs = `
  type User {
    _id: String
    username: String
    email: String
    profileImagePath: String
    playlistIds: [String]
    favouriteSongIds: [String]
    favouriteAlbumIds: [String]
  }

  type Genre {
    _id: String
    name: String
    description: Boolean
  }

  type Song {
    _id: String
    name: String
    coverImagePath: String
    artist: Artist
    featuringArtists: [Artist]
    album: Album
    genres: [Genre]
    duration: Int
    listenCount: Int
    likeCount: Int
  }

  type Artist {
    _id: String
    name: String
    coverImagePath: String
    albums: [Album]
    songs: [Song]
    genres: [Genre]
    listenerCount: Int
    followerCount: Int
  }

  type Album {
    _id: String
    name: String
    coverImagePath: String
    artist: Artist
    songs: [Song]
    genres: [Genre]
    description: String
    coverBannerPath: String
  }
`;

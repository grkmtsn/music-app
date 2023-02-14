export const userTypeDefs = `
  type User {
    _id: String
    username: String
    email: String
    profileImagePath: String
    playlistIds: [String]
    favouriteSongIds: [String]
    favouriteAlbumIds: [String]
  }

  type Query {
    getCurrentUser: User
    getUserById(id: String!): User
  }
`;

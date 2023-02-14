export const albumResolvers = {
  queries: {
    getAlbums: async (_: unknown, __: unknown, context: APP.MyContext) => {
      const data = await context.dataSources.AlbumApi.getAlbums();
      return data;
    }
  }
};

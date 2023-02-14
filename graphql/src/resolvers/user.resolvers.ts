export const userResolvers = {
  queries: {
    getCurrentUser: async (_: unknown, __: unknown, context: APP.MyContext) => {
      const data = await context.dataSources.UserApi.getCurrentUser();
      return data;
    },
    getUserById: async (_: unknown, { id }: { id: string }, context: APP.MyContext) => {
      const data = await context.dataSources.UserApi.getUserById(id);
      return data;
    }
  }
};

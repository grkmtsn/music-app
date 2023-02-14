export const authResolvers = {
  mutations: {
    login: async (_: unknown, { email, password }: API.ILoginBody, context: APP.MyContext) => {
      const data = await context.dataSources.AuthApi.login({ email, password });
      return data;
    },
    register: async (_: unknown, { email, password, username }: API.IRegisterBody, context: APP.MyContext) => {
      const data = await context.dataSources.AuthApi.register({ email, password, username });
      return data;
    }
  }
};

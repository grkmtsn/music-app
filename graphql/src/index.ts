/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import AuthApiSource from './dataSources/AuthApi.js';
import UserApiSource from './dataSources/UserApi.js';
import AlbumApiSource from './dataSources/AlbumApi.js';

import { authResolvers } from './resolvers/auth.resolvers.js';
import { userResolvers } from './resolvers/user.resolvers.js';
import { albumResolvers } from './resolvers/album.resolvers.js';

import { modelTypeDefs } from './typeDefs/models.typeDefs.js';
import { authTypeDefs } from './typeDefs/auth.typeDefs.js';
import { albumTypeDefs } from './typeDefs/album.typeDefs.js';
import { userTypeDefs } from './typeDefs/user.typeDefs.js';

try {
  const server = new ApolloServer<APP.MyContext>({
    typeDefs: [modelTypeDefs, authTypeDefs, userTypeDefs, albumTypeDefs],
    resolvers: {
      Query: {
        ...userResolvers.queries,
        ...albumResolvers.queries
      },
      Mutation: {
        ...authResolvers.mutations
      }
    },
    formatError: (formattedError, error) => {
      // @ts-ignore
      if (error?.extensions?.response?.body?.error?.message) {
        return {
          ...formattedError,
          // @ts-ignore
          message: error?.extensions?.response?.body?.error?.message
        };
      }
      return formattedError;
    }
  });

  const app = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => ({
      dataSources: {
        AuthApi: new AuthApiSource({ token: req.headers['authorization']! }),
        UserApi: new UserApiSource({ token: req.headers['authorization']! }),
        AlbumApi: new AlbumApiSource({ token: req.headers['authorization']! })
      }
    })
  });
  console.info(`
  ################################################
  🛡️  Apollo Server URL: ${app.url} 🛡️
  ################################################
`);
} catch (error) {
  console.log(error);
}

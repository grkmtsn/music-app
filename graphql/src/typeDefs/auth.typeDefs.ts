export const authTypeDefs = `
  type Auth {
    auth: Boolean
    token: String!
    message: String,
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    register(username: String!, password: String!, email: String!): Auth
  }
`;

import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'express';
import { buildSchema } from 'type-graphql';
import { GraphQLSchema } from 'graphql';

import AppUserResolver from './resolvers/AppUserResolver';

export const getApolloServer = async(): Promise<{
  apolloServer: ApolloServer;
  graphQLSchema: GraphQLSchema;
}> => {
  const schema = await buildSchema({
    resolvers: [AppUserResolver]
  });

  return {
    apolloServer: new ApolloServer({
      schema,
    }),
    graphQLSchema: schema
  }
}
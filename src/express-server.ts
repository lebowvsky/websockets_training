import express, { Application, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { getApolloServer } from './apollo-server';
import { GraphQLSchema } from 'graphql';

export const getExpressServer = async(): Promise<{
  expressServer: Application;
  apolloServer: ApolloServer;
  graphQLSchema: GraphQLSchema;
}> => {
  const {apolloServer, graphQLSchema} = await getApolloServer();
  const expressServer = express();
  apolloServer.applyMiddleware({ app: expressServer });

  return { expressServer, apolloServer, graphQLSchema };
}
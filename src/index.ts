import "reflect-metadata";
import { createServer } from 'http';
import { createConnection } from "typeorm";
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from "subscriptions-transport-ws";

import {getExpressServer} from './express-server';

const main = async () => {
  await createConnection();
  
  const {
    expressServer,
    apolloServer,
    graphQLSchema,
  } = await getExpressServer();

  const PORT = 5001;

  const server = createServer(expressServer);
  server.listen({port: PORT}, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);

    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema: graphQLSchema,
      },
      {
        server: server,
        path: apolloServer.graphqlPath,
      }
    )
    console.log('Server has started!');
  })
};

main();

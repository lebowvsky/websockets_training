import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";

import AppUserResolver from "./resolvers/AppUserResolver";

const main = async () => {
  await createConnection();
  const schema = await buildSchema({ resolvers: [AppUserResolver] });
  const server = new ApolloServer({ schema });

  const app = express();
  server.applyMiddleware({ app });
  const PORT = 5001;
  app.listen({ port: PORT }, () =>
    console.log(`server is ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
};

main();

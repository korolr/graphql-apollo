const express = require("express");
const { ApolloServer } = require("apollo-server-express");
import { databaseInitializer } from "./init";
import schema from "./graphql";

const bootstrap = async () => {
  await databaseInitializer();
  // Construct a schema, using GraphQL schema language

  const server = new ApolloServer({ schema });

  const app = express();
  server.applyMiddleware({ app });

  const port = 4000;

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

bootstrap();

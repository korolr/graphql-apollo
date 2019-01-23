const express = require("express");
const { ApolloServer } = require("apollo-server-express");
import { databaseInitializer } from "./init";
import { schema, auth } from "./graphql";

const bootstrap = async () => {
  await databaseInitializer();
  // Construct a schema, using GraphQL schema language

  const server = new ApolloServer({ schema, ...auth });

  const app = express();
  server.applyMiddleware({ app });
  const port = process.env.PORT || 4000;

  app.use(express.static("dist/front"));
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/front/index.html");
  });

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

require("dotenv").config();

bootstrap();

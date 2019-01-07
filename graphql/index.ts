import { Query } from "./types/query";
import { merge } from "lodash";
import { makeExecutableSchema } from "graphql-tools";

import { User } from "./types/user";
// Import typedefs and resolvers here from ./entities/ folder
import { resolvers } from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs: [
    Query,
    User
    // Include typedefs here
  ],
  resolvers: merge(resolvers)
  // Include resolvers here
});

export default schema;

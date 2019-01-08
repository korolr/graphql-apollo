import { Query } from "./types/query";
import { merge } from "lodash";
import { makeExecutableSchema } from "graphql-tools";
import { User } from "./types/user";
import { Item } from "./types/item";
import { Basket } from "./types/basket";
import * as Auth from "../entities/user";
import { getManager } from "typeorm";
// Import typedefs and resolvers here from ./entities/ folder
import { resolvers } from "./resolvers";

export const auth = {
  context: async ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || "";
    console.log(token);
    const repository = getManager().getRepository(Auth.User);
    // try to retrieve a user with the token
    const user = await repository.findOne({ token: token });
    // add the user to the context
    console.log(user);
    return { user };
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [
    Query,
    User,
    Item,
    Basket
    // Include typedefs here
  ],
  resolvers: merge(resolvers)
  // Include resolvers here
});

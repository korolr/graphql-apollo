import { merge } from "lodash";
import { getManager } from "typeorm";
import { makeExecutableSchema } from "graphql-tools";

import { User } from "./types/user";
import { Mutation } from "./types/mutation";
import { Query } from "./types/query";
import { Item } from "./types/item";
import { Basket } from "./types/basket";
import * as Auth from "../entities/user";
import { resolvers } from "./resolvers";
import { mutations } from "./mutations";

export const auth = {
  context: async ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || "";
    const repository = getManager().getRepository(Auth.User);
    // try to retrieve a user with the token
    const user = await repository.findOne({ token: token });
    // add the user to the context
    return { user };
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, User, Item, Basket],
  resolvers: merge(resolvers, mutations)
});

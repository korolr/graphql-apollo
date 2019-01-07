import { userResolver } from "./resolvers/user";
import { usersResolver } from "./resolvers/users";

export const resolvers = {
  Query: {
    ...userResolver,
    ...usersResolver
  }
};

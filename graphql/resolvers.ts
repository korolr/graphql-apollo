import { userResolver } from "./resolvers/user";
import { usersResolver } from "./resolvers/users";
import { userAdminResolver } from "./resolvers/userAdmin";

export const resolvers = {
  Query: {
    ...userResolver,
    ...usersResolver,
    ...userAdminResolver
  }
};

import { userResolver } from "./resolvers/user/user";
import { usersResolver } from "./resolvers/user/users";
import { userAdminResolver } from "./resolvers/user/userAdmin";

import { itemResolver } from "./resolvers/item/item";
import { itemsResolver } from "./resolvers/item/items";

import { basketResolver } from "./resolvers/basket/basket";

export const resolvers = {
  Query: {
    ...userResolver,
    ...usersResolver,
    ...userAdminResolver,
    ...itemResolver,
    ...itemsResolver,
    ...basketResolver
  }
};

import { userResolver } from "./resolvers/user/user";
import { adminUsersResolver } from "./resolvers/user/adminUsers";

import { itemResolver } from "./resolvers/item/item";
import { itemsResolver } from "./resolvers/item/items";

import { basketGetResolver } from "./resolvers/basket/basketGet";

export const resolvers = {
  Query: {
    ...userResolver,
    ...adminUsersResolver,
    ...itemResolver,
    ...itemsResolver,
    ...basketGetResolver
  }
};

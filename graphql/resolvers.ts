import { userResolver } from "./resolvers/user/user";
import { usersResolver } from "./resolvers/user/users";
import { userAdminResolver } from "./resolvers/user/userAdmin";

import { itemResolver } from "./resolvers/item/item";
import { itemsResolver } from "./resolvers/item/items";

import { basketGetResolver } from "./resolvers/basket/basketGet";

import { userLoginMutation } from "./mutation/user/userLogin";
import { userRegMutation } from "./mutation/user/userReg";
import { userResetMutation } from "./mutation/user/userResetToken";
import { basketAddMutation } from "./mutation/basket/basketAdd";
import { basketBuyMutation } from "./mutation/basket/basketBuy";

export const resolvers = {
  Query: {
    ...userResolver,
    ...usersResolver,
    ...userAdminResolver,
    ...itemResolver,
    ...itemsResolver,
    ...basketGetResolver
  },
  Mutation: {
    ...userRegMutation,
    ...userLoginMutation,
    ...userResetMutation,
    ...basketAddMutation,
    ...basketBuyMutation
  }
};

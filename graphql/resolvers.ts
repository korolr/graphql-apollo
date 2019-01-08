import { userResolver } from "./resolvers/user/user";
import { adminUsersResolver } from "./resolvers/user/adminUsers";

import { itemResolver } from "./resolvers/item/item";
import { itemsResolver } from "./resolvers/item/items";

import { basketGetResolver } from "./resolvers/basket/basketGet";

import { userLoginMutation } from "./mutation/user/userLogin";
import { userRegMutation } from "./mutation/user/userReg";
import { userResetMutation } from "./mutation/user/userResetToken";
import { basketAddMutation } from "./mutation/basket/basketAdd";
import { basketBuyMutation } from "./mutation/basket/basketBuy";
import { adminItemAddMutation } from "./mutation/item/adminItemAdd";

export const resolvers = {
  Query: {
    ...userResolver,
    ...adminUsersResolver,
    ...itemResolver,
    ...itemsResolver,
    ...basketGetResolver
  },
  Mutation: {
    ...userRegMutation,
    ...userLoginMutation,
    ...userResetMutation,
    ...basketAddMutation,
    ...basketBuyMutation,
    ...adminItemAddMutation
  }
};

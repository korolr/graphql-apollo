import { userLoginMutation } from "./mutation/user/userLogin";
import { userRegMutation } from "./mutation/user/userReg";
import { userResetMutation } from "./mutation/user/userResetToken";
import { basketAddMutation } from "./mutation/basket/basketAdd";
import { basketBuyMutation } from "./mutation/basket/basketBuy";
import { adminItemAddMutation } from "./mutation/item/adminItemAdd";
import { adminItemUpdateMutation } from "./mutation/item/adminItemUpdate";

export const mutations = {
  Mutation: {
    ...userRegMutation,
    ...userLoginMutation,
    ...userResetMutation,
    ...basketAddMutation,
    ...basketBuyMutation,
    ...adminItemAddMutation,
    ...adminItemUpdateMutation
  }
};

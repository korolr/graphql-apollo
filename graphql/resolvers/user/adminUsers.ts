import { getManager } from "typeorm";
import { User } from "../../../entities/user";

export const adminUsersResolver = {
  async adminUsers(parent, args, context) {
    if (!context.user || context.user.admin) return null;
    const repository = getManager().getRepository(User);
    return await repository.find();
  }
};

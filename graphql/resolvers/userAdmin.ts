import { User } from "../../entities/user";
import { getManager } from "typeorm";

export const userAdminResolver = {
  async userAdmin(parent, args, context) {
    if (!context.user || context.user.admin) return null;
    return "енто админ";
  }
};

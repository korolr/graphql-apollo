import { User } from "../../../entities/user";
import { getManager } from "typeorm";

export const userResolver = {
  async user(obj, {}, context, info) {
    if (!context.user) return null;
    const repository = getManager().getRepository(User);

    const data = await repository.findOne({ token: context.user.token });
    return data;
  }
};

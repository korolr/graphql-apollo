import { getManager } from "typeorm";
import { User } from "../../../entities/user";

export const usersResolver = {
  async users() {
    const repository = getManager().getRepository(User);
    return await repository.find();
  }
};

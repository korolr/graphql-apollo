import { User } from "../../../entities/user";
import { getManager } from "typeorm";

export const userResolver = {
  async user(obj, { id }, context, info) {
    const repository = getManager().getRepository(User);

    const test = await repository.findOne({ id: id });
    console.log(test);
    return test;
  }
};

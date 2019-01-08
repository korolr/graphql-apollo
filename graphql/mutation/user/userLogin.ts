import { genPassword } from "../../../utils/crypt";
import { User } from "../../../entities/user";
import { getManager } from "typeorm";

export const userLoginMutation = {
  async userLogin(obj, { login, password }, context, info) {
    const repository = getManager().getRepository(User);
    const hash = genPassword(password);
    const data = await repository.findOne({
      login: login,
      password: hash
    });
    return data;
  }
};

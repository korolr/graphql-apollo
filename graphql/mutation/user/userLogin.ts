import { genPassword } from "../../../utils/crypt";
import { User } from "../../../entities/user";

import { getManager } from "typeorm";
import { randomBytes } from "crypto";

export const userLoginMutation = {
  async userLogin(obj, { login, password }, context, info) {
    const repository = getManager().getRepository(User);
    const hash = genPassword(password);
    const data = await repository.findOne({
      login: login,
      password: hash
    });
    data.token = randomBytes(64).toString("hex");
    await repository.save(data);
    return data;
  }
};

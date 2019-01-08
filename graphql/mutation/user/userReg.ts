import { genPassword } from "../../../utils/crypt";
import { User } from "../../../entities/user";

import { getManager } from "typeorm";
import { randomBytes } from "crypto";

export const userRegMutation = {
  async userReg(obj, { login, password, address }, context, info) {
    const repository = getManager();
    let data = new User();
    data.admin = false;
    data.address = address;
    data.login = login;
    const hash = genPassword(password);
    data.password = hash;
    data.token = randomBytes(64).toString("hex");
    data.money = 0;
    await repository.save(data);

    return data.token;
  }
};

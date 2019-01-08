import { User } from "../../../entities/user";
import { getManager } from "typeorm";
import { randomBytes } from "crypto";

export const userResetMutation = {
  async userResetToken(obj, {}, context, info) {
    if (!context.user) return null;
    const repository = getManager().getRepository(User);

    const data = await repository.findOne({
      token: context.user.token
    });
    data.token = randomBytes(64).toString("hex");
    await repository.save(data);
    return data.token;
  }
};

import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketUpdateMutation = {
  async basketUpdate(obj, { id, count }, context, info) {
    const repository = getManager();
    if (!context.user) return null;

    await repository
      .createQueryBuilder()
      .update(Basket)
      .set({ countDB: count })
      .where({ id: id })
      .execute();
    return "Успех";
  }
};

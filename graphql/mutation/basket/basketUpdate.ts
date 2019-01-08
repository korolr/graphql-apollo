import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketUpdateMutation = {
  async basketUpdate(obj, { id, count }, context, info) {
    if (!context.user) return null;
    const repository = getManager();

    await repository
      .createQueryBuilder()
      .update(Basket)
      .set({ countDB: count })
      .where({ id: id })
      .execute();
    return "Успех";
  }
};

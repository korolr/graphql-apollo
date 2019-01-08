import { getManager } from "typeorm";
import { Item } from "../../../entities/item";

export const adminItemUpdateMutation = {
  async adminItemAdd(obj, { input }, context, info) {
    if (!context.user || context.user.admin) return null;
    const repository = getManager();

    await repository
      .createQueryBuilder()
      .update(Item)
      .set({
        name: input.name,
        description: input.description,
        imageUrl: input.imageUrl,
        category: input.category,
        count: input.count,
        price: input.price
      })
      .where({ id: input.id })
      .execute();
    return "Успех";
  }
};

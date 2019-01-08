import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketGetResolver = {
  async basketGet(obj, {}, context, info) {
    const repository = getManager().getRepository(Basket);
    if (!context.user) return null;

    const data = await repository.find({
      where: { user_id: context.user.id, status: "В корзине" }
    });
    return data;
  }
};

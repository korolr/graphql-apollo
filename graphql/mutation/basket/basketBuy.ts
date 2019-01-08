import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketBuyMutation = {
  async basketBuy(obj, {}, context, info) {
    const repository = getManager();
    if (!context.user) return null;

    await repository
      .createQueryBuilder()
      .update(Basket)
      .set({ status: "Купленно" })
      .where({ user_id: context.user.id, status: "В корзине" })
      .execute();
    return "Успех";
  }
};

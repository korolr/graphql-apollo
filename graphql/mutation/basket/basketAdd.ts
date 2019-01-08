import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketAddMutation = {
  async basketAdd(obj, { item, count }, context, info) {
    const repository = getManager();
    if (!context.user) return null;

    let data = new Basket();
    data.user_id = context.user.id;
    data.name = item.name;
    data.description = item.description;
    data.imageUrl = item.imageUrl;
    data.category = item.category;
    data.countDB = item.countDB;
    data.countUser = count;
    data.status = "В корзине";
    data.price = item.price;
    await repository.save(data);
    return "Success";
  }
};

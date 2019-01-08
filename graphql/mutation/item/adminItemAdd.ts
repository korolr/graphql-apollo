import { getManager } from "typeorm";
import { Item } from "../../../entities/item";

export const adminItemAddMutation = {
  async adminItemAdd(obj, { input }, context, info) {
    if (!context.user || context.user.admin) return null;
    const repository = getManager().getRepository(Item);

    let item = new Item();
    item.name = input.name;
    item.description = input.description;
    item.imageUrl = input.imageUrl;
    item.category = input.category;
    item.count = input.countDB;
    item.price = input.price;

    await repository.save(item);

    return "Успешно";
  }
};

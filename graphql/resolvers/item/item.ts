import { Item } from "../../../entities/item";
import { getManager } from "typeorm";

export const itemResolver = {
  async item(obj, { id }, context, info) {
    const repository = getManager().getRepository(Item);

    return await repository.findOne({ id: id });
  }
};

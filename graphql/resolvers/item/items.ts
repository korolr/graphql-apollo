import { getManager } from "typeorm";
import { Item } from "../../../entities/item";

export const itemsResolver = {
  async items() {
    const repository = getManager().getRepository(Item);
    return await repository.find();
  }
};

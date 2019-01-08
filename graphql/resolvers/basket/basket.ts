import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketResolver = {
  async basket(obj, { id }, context, info) {
    const repository = getManager().getRepository(Basket);

    const data = await repository.find({
      where: { id: id }
    });
    return data;
  }
};

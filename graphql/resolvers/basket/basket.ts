import { Basket } from "../../../entities/basket";
import { getManager } from "typeorm";

export const basketResolver = {
  async basket(obj, { id }, context, info) {
    const repository = getManager().getRepository(Basket);

    const data = await repository.find({
      join: {
        alias: "basket",
        leftJoinAndSelect: {
          item: "basket.item"
        }
      },
      where: { id: id }
    });
    return data[0];
  }
};

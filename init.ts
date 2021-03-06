import { User } from "./entities/user";
import { Item } from "./entities/item";
import { Basket } from "./entities/basket";
import { createConnection } from "typeorm";

export const databaseInitializer = async () => {
  return await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [User, Item, Basket],
    synchronize: true
  }).then(connection => {
    console.log("Database connection established");

    // let item = new Item();
    // item.id = Math.random() * Math.floor(10000);
    // item.name = "Plitka";
    // item.description = "Samya luchsaia";
    // item.imageUrl = "https://vk.com/";
    // item.category = "plitka";
    // item.count = 2;
    // item.price = 500;

    // connection.manager.save(item).then(card => {
    //   console.log("item saved");
    // });

    // let data = new User();
    // data.id = Math.random() * Math.floor(10000);
    // data.admin = true;
    // data.address = "Balakovo";
    // data.login = "korolr";
    // data.password = "123";
    // data.token = "AAAA";
    // data.money = 5000;
    // data.basket_id = Math.random() * Math.floor(10000);

    // let basket = new Basket();
    // basket.id = data.basket_id;
    // basket.name = item.name;
    // basket.description = item.description;
    // basket.imageUrl = item.imageUrl;
    // basket.category = item.category;
    // basket.countDB = item.count;
    // basket.countUser = 1;
    // basket.price = item.price;

    // connection.manager.save(basket).then(card => {
    //   console.log("basket saved");
    // });

    // // Persist to database
    // return connection.manager.save(data).then(card => {
    //   console.log("user saved");
    // });
  });
};

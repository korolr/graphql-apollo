import { User } from "./entities/user";
import { createConnection } from "typeorm";

export const databaseInitializer = async () => {
  return await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "korolr",
    password: "1234",
    database: "db1",
    entities: [User],
    synchronize: true
  }).then(connection => {
    console.log("Database connection established");

    // let data = new User();
    // data.id = Math.random() * Math.floor(1000);
    // data.admin = true;
    // data.address = "Balakovo";
    // data.login = "korolr";
    // data.password = "123";
    // data.token = "AAAA";

    // // Persist to database
    // return connection.manager.save(data).then(card => {
    //   console.log("card saved");
    // });
  });
};

import { Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany } from "typeorm";
import { Item } from "./item";

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Item, item => item.basket)
  @JoinTable()
  item: Item[];
}

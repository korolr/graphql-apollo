import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Basket } from "./basket";
@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80, nullable: false })
  name: string;

  @Column({ length: 1000, nullable: false })
  description: string;

  @Column({ length: 300, nullable: false })
  imageUrl: string;

  @Column({ length: 50, nullable: false })
  category: string;

  @Column({ default: 0 })
  count: number;

  @Column({ default: 0 })
  price: number;

  @ManyToMany(type => Basket, basket => basket.item)
  basket: Basket[];
}

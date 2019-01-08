import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
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
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_id: string;

  @Column({ length: 80, nullable: false })
  name: string;

  @Column({ length: 1000, nullable: false })
  description: string;

  @Column({ length: 300, nullable: false })
  imageUrl: string;

  @Column({ length: 50, nullable: false })
  category: string;

  @Column({ length: 50, nullable: false })
  status: string;

  @Column({ default: 0 })
  countDB: number;

  @Column({ default: 0 })
  countUser: number;

  @Column({ default: 0 })
  price: number;
}

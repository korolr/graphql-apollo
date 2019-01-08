import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Generated
} from "typeorm";
import { Basket } from "./basket";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, nullable: false, unique: true })
  login: string;

  @Column({ length: 50, nullable: false })
  password: string;

  @Column({ length: 50, nullable: false })
  address: string;

  @Column({ length: 50, nullable: false })
  token: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ default: 0 })
  money: number;

  @Generated("uuid")
  @Column()
  basket_id: number;
}

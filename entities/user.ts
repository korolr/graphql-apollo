import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
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
}

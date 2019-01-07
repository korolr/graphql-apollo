import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  login: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 50 })
  address: string;

  @Column({ length: 50 })
  token: string;

  @Column()
  admin: boolean;
}

import { Field } from "@nestjs/graphql";
import { UserModel } from "src/users/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PositionModel } from "./position.entity";

@Entity()
export class CompanyModel {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  tel: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserModel, (user) => user.company)
  @JoinColumn()
  user: UserModel

  @OneToOne(() => PositionModel, position => position)
  position: PositionModel
}


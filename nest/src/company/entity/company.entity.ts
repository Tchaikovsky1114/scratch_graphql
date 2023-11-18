import { Field, ObjectType } from "@nestjs/graphql";
import { UserModel } from "src/users/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum PositionEnum {
  INTERN = "인턴",
  STAFF = "사원",
  SENIOR_STAFF = "주임",
  ASSISTANT_MANAGER = "차장",
  DEPUTY_MANAGER = "과장",
  MANAGER = "부장",
  SENIOR_MANAGER = "팀장",
  DEPARTMENT_HEAD = "본부장",
  DIRECTOR = "사장",
  PRESIDENT = "회장"
}
@ObjectType()
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

  @Field()
  @Column({
    type: 'enum',
    enum: PositionEnum,
    default: PositionEnum.INTERN
  })
  position: PositionEnum
}


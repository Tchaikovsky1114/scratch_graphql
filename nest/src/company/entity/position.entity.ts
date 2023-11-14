import { Field } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyModel } from "./company.entity";


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

@Entity()
export class PositionModel {

  @PrimaryGeneratedColumn()
  @Field()
  id:number;
  
  @Field()
  @Column({
    type: 'enum',
    enum: PositionEnum,
    default: PositionEnum.INTERN
  })
  position: PositionEnum

  @OneToOne(() => CompanyModel, (company) => company.position)
  @JoinColumn()
  company: CompanyModel

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
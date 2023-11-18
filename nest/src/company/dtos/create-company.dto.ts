import { PickType } from "@nestjs/mapped-types";
import { CompanyModel } from "../entity/company.entity";



export class CreateCompanyDto extends PickType(CompanyModel, ['name','position','tel']){}
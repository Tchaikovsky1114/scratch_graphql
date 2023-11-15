import { CompanyService } from './../company/company.service';
import { Args, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModel } from './entity/user.entity';



@Resolver(  UserModel)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly companyService: CompanyService
    ) {}

  @Query(() => UserModel)
  async users(@Args('id') id: string): Promise<UserModel> {
    // Todo: userService 구현하기
    return await this.usersService.findOne(+id)
  }
}
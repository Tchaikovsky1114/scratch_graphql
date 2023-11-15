import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CompanyService } from 'src/company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';
import { CompanyModel } from 'src/company/entity/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    UserModel,
    CompanyModel
  ]
    )],
  providers: [UsersResolver, UsersService, CompanyService],
})
export class UsersModule {}

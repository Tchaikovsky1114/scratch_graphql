import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CompanyService } from 'src/company/company.service';

@Module({
  
  providers: [UsersResolver, UsersService, CompanyService],
})
export class UsersModule {}

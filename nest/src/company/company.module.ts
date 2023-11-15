import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModel } from './entity/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompanyModel
    ]),
  ],
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}

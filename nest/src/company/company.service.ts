import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyModel } from './entity/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
  @InjectRepository(CompanyModel)
  private readonly companyRepository:Repository<CompanyModel>){}

  async create(a: string) {
    const com = this.companyRepository.create({
      name:a,
    })
    await this.companyRepository.save(com)
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Mutation } from '@nestjs/graphql';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>) {}

  
  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id
      }
    })
    return user;
  }

  async create(body: CreateUserDto) {
    const b = this.userRepository.create(body);
    const user = await this.userRepository.save(b);
    return user;
  }
}

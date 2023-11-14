import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

import { join } from 'path';
import { CompanyModule } from './company/company.module';
import { UserModel } from './users/entity/user.entity';
import { CompanyModel } from './company/entity/company.entity';
import { PositionModel } from './company/entity/position.entity';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: '127.0.0.1',
      port: 4321,
      username: 'graphql',
      password: 'graphql',
      database: 'graphql',
      synchronize: true,
      entities: [UserModel,CompanyModel,PositionModel]
    }),
    UsersModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

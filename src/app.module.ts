import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { UsersService } from './users.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'bobowna123',
      database: 'users',
      autoLoadModels: true, //reconhece automaticamente os modelos do projeto (SequelizeModule.forFeature([modelos]))
      synchronize: true,    //quando subir a aplicação, importa automaticamente os modulos(em forFeature) e sincroniza com o banco de dados
    }),
    SequelizeModule.forFeature([Users]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}

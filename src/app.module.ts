import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './pets.controller';
import { Pets } from './pets.model';
import { PetsService } from './pets.service';
import { PetsUsers } from './petsUsers.model';
import { PetsUsersService } from './petsUsers.service';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { UsersService } from './users.service';
import { VacinasController } from './vacinas.controller';
import { Vacinas } from './vacinas.model';
import { VacinasService } from './vacinas.service';
import { VacinasPets } from './vacinasPets.model';
import { vacinasPetsService } from './vacinasPets.service';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      autoLoadModels: true, //reconhece automaticamente os modelos do projeto (SequelizeModule.forFeature([modelos]))
      synchronize: true, //quando subir a aplicação, importa automaticamente os modulos(em forFeature) e sincroniza com o banco de dados
    }),
    SequelizeModule.forFeature([Users, Vacinas, Pets, PetsUsers, VacinasPets]),
  ],
  controllers: [
    AppController,
    UsersController,
    VacinasController,
    PetsController,
  ],
  providers: [
    AppService,
    UsersService,
    VacinasService,
    PetsService,
    PetsUsersService,
    vacinasPetsService,
  ],
})
export class AppModule {}
//mysql://bb79d3af9866fc:9ce1de37@us-cdbr-east-05.cleardb.net/heroku_e96ad73dc3fc9ca?reconnect=true

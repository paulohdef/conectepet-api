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

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'us-cdbr-east-05.cleardb.net',
      port: 3306,
      username: 'bb79d3af9866fc',
      password: '9ce1de37',
      database: 'heroku_e96ad73dc3fc9ca',
      autoLoadModels: true, //reconhece automaticamente os modelos do projeto (SequelizeModule.forFeature([modelos]))
      synchronize: true, //quando subir a aplicação, importa automaticamente os modulos(em forFeature) e sincroniza com o banco de dados
    }),
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'bobowna123',
    //   database: 'users',
    //   autoLoadModels: true, //reconhece automaticamente os modelos do projeto (SequelizeModule.forFeature([modelos]))
    //   synchronize: true,    //quando subir a aplicação, importa automaticamente os modulos(em forFeature) e sincroniza com o banco de dados
    // }),
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

import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Pets } from './pets.model';
import { Users } from './users.model';

//extender da classe model faz ganhar automaticamente a coluna id

@Table
export class PetsUsers extends Model<PetsUsers> {

  @ForeignKey(() => Pets)
  @Column
  petsId: number;

  @ForeignKey(() => Users)
  @Column
  usersId: number;

}

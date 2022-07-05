import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Pets } from './pets.model';
import { Vacinas } from './vacinas.model';

//extender da classe model faz ganhar automaticamente a coluna id

@Table
export class VacinasPets extends Model<VacinasPets> {
  @ForeignKey(() => Vacinas)
  @Column
  vacinasId: number;

  @ForeignKey(() => Pets)
  @Column
  petsId: number;
}

import { Column, DataType, Model, Table } from 'sequelize-typescript';

//extender da classe model faz ganhar automaticamente a coluna id

@Table
export class Vacinas extends Model<Vacinas> {

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  dataInicio: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  dataFim: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  fornecedor: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  atendeGenero: string;
}

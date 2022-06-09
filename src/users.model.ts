import { Column, DataType, Model, Table } from 'sequelize-typescript';

//extender da classe model faz ganhar automaticamente a coluna id

@Table
export class Users extends Model<Users> {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id: number;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  celular: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  dataNascimento: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  cep: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  password: string;
}

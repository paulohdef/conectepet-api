import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { PetsUsers } from './petsUsers.model';
import { Users } from './users.model';

//extender da classe model faz ganhar automaticamente a coluna id

@Table
export class Pets extends Model<Pets> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  genero: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  sexo: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  raca: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  idade: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  castrado: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: true,
  })
  foto: string;

  @BelongsToMany(
    () => Users,
    () => PetsUsers,
  )
  users: Users[];
}

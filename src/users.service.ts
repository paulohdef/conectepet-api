import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VirtualTimeScheduler } from 'rxjs';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectModel(Users)
    private userModel : typeof Users
  ){}

  async obterTodos(): Promise<Users[]> {
    return this.userModel.findAll();
  }

  async obterUm(id: number): Promise<Users> {
    return this.userModel.findByPk(id);
  }

  async criar(user: Users) {
    this.userModel.create(user)
  }

  async alterar(user: Users): Promise<[number, Users[]]>{
    return this.userModel.update(user, {
      where : {
        id : user.id
      }
    });
  }

  async apagar(id: number) {
    const user: Users = await this.obterUm(id)
    user.destroy();
  }
}

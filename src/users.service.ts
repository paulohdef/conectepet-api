import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VirtualTimeScheduler } from 'rxjs';
import { Pets } from './pets.model';
import { PetsUsers } from './petsUsers.model';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
    @InjectModel(PetsUsers)
    private petUserModel: typeof PetsUsers,
  ) {}

  async obterTodos(): Promise<Users[]> {
    return this.userModel.findAll();
  }

  async obterUm(id: number): Promise<Users> {
    return this.userModel.findByPk(id);
  }

  async obterPets(id: number): Promise<Users> {
    return this.userModel.findByPk(id, { include: [Pets] });
  }

  async criar(user: Users) {
    this.userModel.create(user);
  }

  async alterar(user: Users): Promise<[number, Users[]]> {
    return this.userModel.update(user, {
      where: {
        id: user.id,
      },
    });
  }

  async atribuiPetToUser(ids) {
    return this.petUserModel.create(ids);
  }

  async apagar(id: number) {
    const user: Users = await this.obterUm(id);
    user.destroy();
  }
}

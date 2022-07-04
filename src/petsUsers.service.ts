import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VirtualTimeScheduler } from 'rxjs';
import { PetsUsers } from './petsUsers.model';

@Injectable()
export class PetsUsersService {
  
  constructor(
    @InjectModel(PetsUsers)
    private PetUser : typeof PetsUsers
  ){}

  async obterTodos(): Promise<PetsUsers[]> {
    return this.PetUser.findAll();
  }

  async obterUm(id: number): Promise<PetsUsers> {
    return this.PetUser.findByPk(id);
  }

  async criar(petUser: PetsUsers) {
    this.PetUser.create(petUser)
  }

  async alterar(petUser: PetsUsers): Promise<[number, PetsUsers[]]>{
    return this.PetUser.update(petUser, {
      where : {
        id : petUser.id
      }
    });
  }

  async apagar(id: number) {
    const pet: PetsUsers = await this.obterUm(id)
    pet.destroy();
  }
}

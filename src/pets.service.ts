import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VirtualTimeScheduler } from 'rxjs';
import { Pets } from './pets.model';

@Injectable()
export class PetsService {
  
  constructor(
    @InjectModel(Pets)
    private PetModel : typeof Pets
  ){}

  async obterTodos(): Promise<Pets[]> {
    return this.PetModel.findAll();
  }

  async obterUm(id: number): Promise<Pets> {
    return this.PetModel.findByPk(id);
  }

  async criar(pet: Pets) {
    this.PetModel.create(pet)
  }

  async alterar(pet: Pets): Promise<[number, Pets[]]>{
    return this.PetModel.update(pet, {
      where : {
        id : pet.id
      }
    });
  }

  async apagar(id: number) {
    const pet: Pets = await this.obterUm(id)
    pet.destroy();
  }
}

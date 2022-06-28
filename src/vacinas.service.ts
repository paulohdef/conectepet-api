import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VirtualTimeScheduler } from 'rxjs';
import { Vacinas } from './vacinas.model';

@Injectable()
export class VacinasService {
  
  constructor(
    @InjectModel(Vacinas)
    private vacinasModel : typeof Vacinas
  ){}

  async obterTodos(): Promise<Vacinas[]> {
    return this.vacinasModel.findAll();
  }

  async obterUm(id: number): Promise<Vacinas> {
    return this.vacinasModel.findByPk(id);
  }

  async criar(vacina: Vacinas) {
    this.vacinasModel.create(vacina)
  }

  async alterar(vacina: Vacinas): Promise<[number, Vacinas[]]>{
    return this.vacinasModel.update(vacina, {
      where : {
        id : vacina.id
      }
    });
  }

  async apagar(id: number) {
    const vacina: Vacinas = await this.obterUm(id)
    vacina.destroy();
  }
}

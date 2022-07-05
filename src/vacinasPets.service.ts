import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VirtualTimeScheduler } from 'rxjs';
import { VacinasPets } from './vacinasPets.model';

@Injectable()
export class vacinasPetsService {
  constructor(
    @InjectModel(VacinasPets)
    private vacinaPet: typeof VacinasPets,
  ) {}

  async obterTodos(): Promise<VacinasPets[]> {
    return this.vacinaPet.findAll();
  }

  async obterUm(id: number): Promise<VacinasPets> {
    return this.vacinaPet.findByPk(id);
  }

  async criar(vacinaPet: VacinasPets) {
    this.vacinaPet.create(vacinaPet);
  }

  async alterar(vacinaPet: VacinasPets): Promise<[number, VacinasPets[]]> {
    return this.vacinaPet.update(vacinaPet, {
      where: {
        id: vacinaPet.id,
      },
    });
  }

  async apagar(id: number) {
    const vacinaPet: VacinasPets = await this.obterUm(id);
    vacinaPet.destroy();
  }
}

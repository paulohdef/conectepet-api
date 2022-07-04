import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Pets } from './pets.model';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  async obterTodos(): Promise<Pets[]> {
    return this.petsService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Pets> {
    return this.petsService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() pet: Pets) {
    return this.petsService.criar(pet);
  }

  @Put()
  async alterar(@Body() pet: Pets): Promise<[number, Pets[]]> {
    return this.petsService.alterar(pet);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.petsService.apagar(params.id);
  }
}

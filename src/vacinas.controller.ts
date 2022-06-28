import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
import { Vacinas } from './vacinas.model';
import { VacinasService } from './vacinas.service';
  
  @Controller('vacinas')
  export class VacinasController {
    constructor(private vacinasService: VacinasService) {}
  
    @Get()
    async obterTodos(): Promise<Vacinas[]> {
      return this.vacinasService.obterTodos();
    }
  
    @Get(':id')
    async obterUm(@Param() params): Promise<Vacinas> {
      return this.vacinasService.obterUm(params.id);
    }
  
    @Post()
    async criar(@Body() vacina: Vacinas) {
      this.vacinasService.criar(vacina);
    }
  
    @Put()
    async alterar(@Body() vacina: Vacinas): Promise<[number, Vacinas[]]> {
      return this.vacinasService.alterar(vacina);
    }
  
    @Delete(':id')
    async apagar(@Param() params) {
      this.vacinasService.apagar(params.id);
    }
  }
   
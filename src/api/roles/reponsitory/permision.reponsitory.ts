import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permision } from '../schemas/permision.entity';
import { Repository } from 'typeorm';
import { CreatePermisionDTO } from '../validation/dto/create.dto';

@Injectable()
export class PermisionRepository {
  constructor(
    @InjectRepository(Permision)
    private permision: Repository<Permision>,
  ) {}

  //permision repository
  createPer(data: CreatePermisionDTO) {
    return this.permision.createQueryBuilder().insert().into(Permision).values(data).execute();
  }
}

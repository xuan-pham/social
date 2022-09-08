import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { PermisionRepository } from './reponsitory/permision.reponsitory';
import { CreatePermisionDTO } from './validation/dto/create.dto';

@Injectable()
export class RolesService {
  constructor(private RolesReponsitory: PermisionRepository) {}

  async create(data: CreatePermisionDTO) {
    try {
      await this.RolesReponsitory.createPer(data);
      return {
        status: HttpStatus.OK,
        messages: 'Successful create',
      };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}

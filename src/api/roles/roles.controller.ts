import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreatePermisionDTO } from './validation/dto/create.dto';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('create')
  create(@Body() data: CreatePermisionDTO) {
    return this.rolesService.create(data);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { PermisionRepository } from './reponsitory/permision.reponsitory';
import { RolesService } from './roles.service';
import { Permision } from './schemas/permision.entity';
import { Permisiondetail } from './schemas/permision_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permision, Permisiondetail])],
  controllers: [RolesController],
  providers: [RolesService, PermisionRepository],
})
export class RolesModule {}

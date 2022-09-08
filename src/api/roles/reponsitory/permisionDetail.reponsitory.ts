import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permisiondetail } from '../schemas/permision_detail.entity';
import { CreatePermisionDetailDto } from '../validation/dto/create.dto';

@Injectable()
export class PermisiondetailReponsitory {
  constructor(
    @InjectRepository(Permisiondetail)
    private permisionDetail: Repository<Permisiondetail>,
  ) {}

  createPerDetail(data: CreatePermisionDetailDto) {
    return this.permisionDetail.createQueryBuilder().insert().into(Permisiondetail).values({
      action_name: data.action_name,
    });
  }
}

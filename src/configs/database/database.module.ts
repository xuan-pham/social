import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permision } from 'src/api/roles/schemas/permision.entity';
import { Permisiondetail } from 'src/api/roles/schemas/permision_detail.entity';
import { UserPermision } from 'src/api/roles/schemas/user_permision.entity';
import { Users } from 'src/api/users/schemas/user.entity';

import { POSTGRESQL_CONFIG } from '../constant.config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: POSTGRESQL_CONFIG.host,
        port: 5432,
        username: POSTGRESQL_CONFIG.username,
        password: POSTGRESQL_CONFIG.password,
        database: POSTGRESQL_CONFIG.database,
        entities: [Users, Permision, Permisiondetail, UserPermision],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}

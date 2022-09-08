import { Permision } from 'src/api/roles/schemas/permision.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../users/schemas/user.entity';

@Entity('Userper')
export class UserPermision {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Permision, (permision) => permision.id)
  permision: Permision;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users;

  @Column()
  licensed: number;
}

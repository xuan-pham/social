import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permision } from './permision.entity';

@Entity('Permisiondetail')
export class Permisiondetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Permision, (permision) => permision.id)
  permision: Permision;

  @Column()
  action_name: string;

  @Column({ default: 0 })
  check_action: number;
}

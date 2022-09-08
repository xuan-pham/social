import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Permision')
export class Permision {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

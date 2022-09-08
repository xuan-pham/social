import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  first_name: string;

  @Column({ length: 255 })
  last_name: string;

  @Column({ length: 255, nullable: false })
  username: string;

  @Column({ length: 255, nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  isStatus: boolean;

  @Column()
  isGoogle: boolean;

  @Column()
  birthday: Date;

  @Column()
  phone: string;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}

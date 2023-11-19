import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'exercise' })
export class ExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'content' })
  content: string;
  @Column({ name: 'created_at' })
  created_at: Date;
  @JoinColumn({ name: 'id' })
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.exercises)
  user: UserEntity;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'exercise' })
export class ExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'content' })
  content: string;
  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.exercises)
  user: UserEntity;
  @Column({ name: 'user_id' })
  user_id: string;
}

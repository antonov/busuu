import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExerciseEntity } from './exercise.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'name', length: 100 })
  name: string;
  @OneToMany(() => ExerciseEntity, (exercise) => exercise.user)
  exercises: ExerciseEntity[];
}

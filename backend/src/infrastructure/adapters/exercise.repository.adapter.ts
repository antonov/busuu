import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../../core/domain/entities/Exercise';
import { ExerciseRepository } from '../../core/domain/ports/outbound/ExerciseRepository';
import { ExerciseEntity } from '../exercises_db/entities/exercise.entity';

@Injectable()
export class ExerciseRepositoryAdapter implements ExerciseRepository {
  constructor(
    @InjectRepository(ExerciseEntity)
    private repository: Repository<ExerciseEntity>,
  ) {}

  async findAll(): Promise<Exercise[]> {
    return this.repository.find({
      relations: ['user'], 
      select: {
        content: true,
        created_at: true,
        id: true,
        user_id: true,
        user: {
          id: false,
          name: true,   
         }
        }
      });
  }

  async findByUserId(user_id: string): Promise<Exercise[]> {
    return this.repository.find({
      where: { user: { id: user_id } },
      relations: ['user'],
    });
  }

  async create(exercise: Exercise): Promise<Exercise> {
    return this.repository.save(exercise);
  }
}

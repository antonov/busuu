import { Exercise } from '../../entities/Exercise';

export interface ExerciseRepository {
  create(exercise: Exercise): Promise<Exercise>;
  findByUserId(user_id: string): Promise<Exercise[]>;
  findAll(): Promise<Exercise[]>;
}

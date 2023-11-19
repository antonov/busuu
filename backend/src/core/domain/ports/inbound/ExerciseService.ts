import { Exercise } from '../../entities/Exercise';

export interface ExerciseService {
  create(exercise: Exercise): Promise<Exercise>;
  validateContentLength(exercise: Exercise): boolean;
  validateUserLimit(user: string): Promise<boolean>;
  findByUserId(user_id: string): Promise<Exercise[]>;
  findAll(): Promise<Exercise[]>;
}

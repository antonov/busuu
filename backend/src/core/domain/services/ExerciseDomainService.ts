import { ExerciseService } from '../ports/inbound/ExerciseService';
import { ExerciseRepository } from '../ports/outbound/ExerciseRepository';
import { Exercise } from '../entities/Exercise';
import { ExerciseServiceError } from 'src/core/shared/error/ExerciseServiceError';

export class ExerciseDomainService implements ExerciseService {
  private repository: ExerciseRepository;
  constructor(repository: ExerciseRepository) {
    this.repository = repository;
  }
  async create(exercise: Exercise): Promise<Exercise> {
    if (!this.validateContentLength(exercise)) {
      throw new ExerciseServiceError('Content length must be between 1 and 100 characters');
    }

    if (!this.validateUserLimit(exercise.user.id)) {
      throw new ExerciseServiceError('User cannot have more than 10 exercises');
    }

    return this.repository.create(exercise);
  }
  async findAll(): Promise<Exercise[]> {
    return this.repository.findAll();
  }

  validateContentLength(exercise: Exercise): boolean {
    return exercise.content.length > 0 && exercise.content.length <= 100;
  }

  async validateUserLimit(user_id: string): Promise<boolean> {
    const user_exercises = await this.findByUserId(user_id);
    if (user_exercises.length < 10) {
      return true;
    }
    return false;
  }

  async findByUserId(user_id: string): Promise<Exercise[]> {
    return this.repository.findByUserId(user_id);
  }
}

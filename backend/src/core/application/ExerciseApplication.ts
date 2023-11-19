import { Exercise } from '../domain/entities/Exercise';
import { NewExerciseDTO } from '../shared/dto/NewExerciseDTO';

export interface ExerciseApplication {
  create(exercise: NewExerciseDTO): Promise<string>;
  findAll(): Promise<Exercise[]>;
}

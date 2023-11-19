import { NewExerciseDTO } from '../../shared/dto/NewExerciseDTO';
import { ExerciseService } from '../../domain/ports/inbound/ExerciseService';
import { ExerciseApplication } from '../ExerciseApplication';
import { UserService } from '../../domain/ports/inbound/UserService';
import { Exercise } from '../../domain/entities/Exercise';
import { ExerciseApplicationError } from '../../shared/error/ExerciseApplicationError';

export class ExerciseApplicationService implements ExerciseApplication {
  constructor(
    private readonly exercise: ExerciseService,
    private readonly user: UserService,
  ) {}
  async create(newExerciseDTO: NewExerciseDTO): Promise<string> {
    const user = await this.user.findById(newExerciseDTO.user_id);
    if (!user) {
      throw new ExerciseApplicationError('User not found');
    }

    const entity = Exercise.create(newExerciseDTO.content, user);
    const created = await this.exercise.create(entity);

    return created.id;
  }

  async findAll(): Promise<Exercise[]> {
    return await this.exercise.findAll();
  }
}

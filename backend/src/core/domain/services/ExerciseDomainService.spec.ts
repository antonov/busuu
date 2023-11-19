import { randomUUID } from 'crypto';
import { Exercise } from '../entities/Exercise';
import { ExerciseRepository } from '../ports/outbound/ExerciseRepository';
import { ExerciseDomainService } from './ExerciseDomainService';
import { ExerciseService } from '../ports/inbound/ExerciseService';

function ExerciseRepositoryMock(exercise: Exercise): ExerciseRepository {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve(exercise)),
    findByUserId: jest.fn().mockReturnValue(Promise.resolve([exercise])),
    findAll: jest.fn().mockReturnValue(Promise.resolve([exercise])),
  };
}

describe('ExerciseDomainService', () => {
  let service: ExerciseService;
  const exercise: Exercise = {
    id: randomUUID(),
    content: 'test',
    created_at: new Date(),
    user: { id: randomUUID(), name: 'test' },
  } as Exercise;

  it('should call ExerciseRepository.create()', async () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    await service.create(exercise);
    expect(repository.create).toHaveBeenCalledTimes(1);
  });

  it('should call ExerciseRepository.findAll()', async () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    await service.findAll();
    expect(repository.findAll).toHaveBeenCalledTimes(1);
  });

  it('should call ExerciseRepository.findByUserId()', async () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    await service.findByUserId(exercise.user.id);
    expect(repository.findByUserId).toHaveBeenCalledTimes(1);
  });

  it('should return true when validateContentLength() is called with a valid exercise', () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    expect(service.validateContentLength(exercise)).toBe(true);
  });

  it('should return false when validateContentLength() is called with an invalid content length equals empty', () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    expect(service.validateContentLength({ ...exercise, content: '' })).toBe(
      false,
    );
  });

  it('should return false when validateContentLength() is called with an invalid content length > 100 chars', () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    expect(
      service.validateContentLength({ ...exercise, content: 'A'.repeat(101) }),
    ).toBe(false);
  });

  it('should return true when validateUserLimit() is called with a valid user', async () => {
    const repository = ExerciseRepositoryMock(exercise);
    service = new ExerciseDomainService(repository);
    expect(await service.validateUserLimit(exercise.user.id)).toBe(true);
  });
});

import { ExerciseApplication } from "../ExerciseApplication";
import { User } from "../../domain/entities/User";
import { ExerciseApplicationService } from "./ExerciseApplicationService";
import { Exercise } from "../../domain/entities/Exercise";
import { ExerciseApplicationError } from "../../shared/error/ExerciseApplicationError";
import { ExerciseService } from '../../domain/ports/inbound/ExerciseService';
import { UserService } from '../../domain/ports/inbound/UserService';

function ExerciseServiceMock(id: string): ExerciseService {
  const exercise = { 
    id, 
    content: 'Exercise 1',
  } as Exercise
  return { 
    create: jest.fn().mockReturnValue(Promise.resolve(exercise)),
    validateContentLength: jest.fn().mockReturnValue(true),
    validateUserLimit: jest.fn().mockReturnValue(true),
    findByUserId: jest.fn().mockReturnValue(Promise.resolve([exercise])),
    findAll: jest.fn().mockReturnValue(Promise.resolve([exercise])),
  }
}

function UserServiceMock(returnValue: any): UserService {
  return { 
    findById: jest.fn().mockReturnValue(Promise.resolve(returnValue)),  
    create: jest.fn().mockReturnValue(Promise.resolve(returnValue)),
  }
}

describe('ExerciseApplicationService', () => {

  let service: ExerciseApplication = null

  it('should call ExerciseService.save()"', async () => {
    const exerciseMock = ExerciseServiceMock('77765afb-4f45-4510-8812-6d85a9150f62')
    const userMock = UserServiceMock(new User())
    service = new ExerciseApplicationService(exerciseMock, userMock)
    const result = await service.create({ content: 'exercise1', user_id: 'cde811a4-e18a-4b06-9365-57fd87162a4a'})
    expect(exerciseMock.create).toBeCalled()
    expect(result).toBe('77765afb-4f45-4510-8812-6d85a9150f62')
  });

  it('should throw ExerciseApplicationError with a invalid user', async () => {
    const exerciseMock = ExerciseServiceMock ('77765afb-4f45-4510-8812-6d85a9150f62')
    const userMock = UserServiceMock(null)
    service = new ExerciseApplicationService(exerciseMock,  userMock)
    await expect(service.create({ content: 'exercise 1', user_id: 'e9ac27ed-284f-42d9-aa0b-5abbde0c16ef' })).rejects.toThrow(ExerciseApplicationError);
    expect(exerciseMock.create).not.toBeCalled()

  });

});
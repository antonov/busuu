import { DynamicModule, Module, Type } from '@nestjs/common';
import { ExerciseApplicationService } from './application/services/ExerciseApplicationService';
import { UserRepository } from './domain/ports/outbound/UserRepository';
import { ExerciseRepository } from './domain/ports/outbound/ExerciseRepository';
import { ExerciseDomainService} from './domain/services/ExerciseDomainService';
import { UserDomainService } from './domain/services/UserDomainService';


/**
 * Options for core module 
 */
export type CoreModuleOptions = {
  modules: Type[];
  adapters?: {
    userRepository: Type<UserRepository>;
    exerciseRepository: Type<ExerciseRepository>;
  }
}

/**
 * Providers token for netsjs injection
 */
export const EXERCISE_APPLICATION = 'EXERCISE_APPLICATION'
export const USER_SERVICE = 'USER_SERVICE'
export const EXERCISE_SERVICE = 'EXERCISE_SERVICE'



@Module({})
export class CoreModule {

  static register({ modules, adapters }: CoreModuleOptions): DynamicModule {

    const { exerciseRepository, userRepository } = adapters

    const ExerciseApplicationProvider = {
      provide: EXERCISE_APPLICATION,
      useFactory(exercise: ExerciseDomainService, user: UserDomainService) {
        return new ExerciseApplicationService(exercise, user)
      },
      inject: [
        EXERCISE_SERVICE,
        USER_SERVICE,
      ]
    }

    const UserServiceProvider = {
      provide: EXERCISE_SERVICE,
      useFactory(repository: UserRepository) {
        return new UserDomainService(repository)
      },
      inject:[
        exerciseRepository
      ]
    }

    const ExerciseServiceProvider = {
      provide: USER_SERVICE,
      useFactory(repository: UserRepository) {
        return new UserDomainService(repository)
      },
      inject:[
        userRepository
      ]
    }

    return {
      module: CoreModule,
      global: true,
      imports: [
        ...modules
      ],
      providers: [
        ExerciseApplicationProvider,
        UserServiceProvider,
        ExerciseServiceProvider
      ],
      exports: [
        EXERCISE_APPLICATION
      ],
    }
  }

}
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CoreModule } from './core/core.module';
import { UserRepositoryAdapter } from './infrastructure/adapters/user.repository.adapter';
import { ExerciseRepositoryAdapter } from './infrastructure/adapters/exercise.repository.adapter';
import { SharedModule } from './infrastructure/shared/shared.module';

@Module({
  imports: [
    InfrastructureModule,
    SharedModule,
    CoreModule.register({
      modules: [
        InfrastructureModule
      ],
      adapters: {
        exerciseRepository: ExerciseRepositoryAdapter,
        userRepository: UserRepositoryAdapter,
      }
    }),
  ]
})
export class AppModule { }
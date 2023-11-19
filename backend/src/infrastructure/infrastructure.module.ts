import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseRepositoryAdapter } from './adapters/exercise.repository.adapter';
import { UserRepositoryAdapter } from './adapters/user.repository.adapter';
import { HttpServerModule } from './http_server/http_server.module';
import { ExerciseEntity } from './exercises_db/entities/exercise.entity';
import { UserEntity } from './exercises_db/entities/user.entity';

import { ExercisesDbModule } from './exercises_db/exercises_db.module';
import { User } from 'src/core/domain/entities/User';

@Module({
    providers: [
        UserRepositoryAdapter,
        ExerciseRepositoryAdapter
    ],
    exports: [
        ExerciseRepositoryAdapter,
        UserRepositoryAdapter
    ],
    imports: [
        ExercisesDbModule,
        HttpServerModule,
        TypeOrmModule.forFeature([
            ExerciseEntity,
            UserEntity
        ])
    ]
})
export class InfrastructureModule { }
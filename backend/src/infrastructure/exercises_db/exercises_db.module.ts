import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './entities/exercise.entity';
import { UserEntity } from './entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => {
                return {
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'busuu',
                    password: 'busuu',
                    database: 'exercises_db',
                    entities: [
                        ExerciseEntity,
                        UserEntity,
                    ],
                    synchronize: true,
                    logging: ['query']
                }
            },
        })
    ]
})
export class ExercisesDbModule { }
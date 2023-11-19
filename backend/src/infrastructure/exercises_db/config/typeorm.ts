import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";
import { ExerciseEntity } from "../entities/exercise.entity";
import { UserEntity } from "../entities/user.entity";
dotenvConfig({ path: '.env' });


const config = {
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: `${process.env.DATABASE_PORT}`,
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    entities: [ExerciseEntity, UserEntity],
    synchronize: true,
    migrationsRun: false,
    cli: {
        migrationsDir: 'dist/infrastructure/exercises_db/migrations'
    },
    logging: ['query']
}


export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
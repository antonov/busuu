import { MigrationInterface, QueryRunner } from "typeorm"
import { UserEntity } from "../entities/user.entity";
import { ExerciseEntity } from "../entities/exercise.entity";

export class InitialSeed1700416798065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<UserEntity>(UserEntity, {
              id: 'c4b22487-7e1e-40cf-b28f-38506c456df8',
              name: 'Artem Antonov',
            }),
        );
        await queryRunner.manager.save(
            queryRunner.manager.create<ExerciseEntity>(ExerciseEntity, {
              content: 'Exercise 1',
              created_at: new Date(),
                user: { id: 'c4b22487-7e1e-40cf-b28f-38506c456df8' },
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

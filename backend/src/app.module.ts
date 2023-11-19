import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ExercisesDbModule } from './infraestructure/exercises_db/exercises_db.module';

@Module({
  imports: [CoreModule, InfrastructureModule, ExercisesDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

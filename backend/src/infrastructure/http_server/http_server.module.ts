import { Module } from "@nestjs/common";
import { ExerciseController } from "./controllers/exercise.controller";
import { RootController } from "./controllers/root.controller";

@Module({
    controllers: [
        RootController,
        ExerciseController
    ],
})
export class HttpServerModule {

}
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from "@nestjs/common";
import { ExerciseApplicationError } from "src/core/shared/error/ExerciseApplicationError";
import { Response, Request } from 'express';

@Catch(ExerciseApplicationError)
export class ExerciseCreatorFilter implements ExceptionFilter {

    catch(exception: ExerciseApplicationError, host: ArgumentsHost) {
        
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>()

        Logger.error(`ExerciseController (${request.method}) at {${request.path}} error: ${exception.message}`)

        response
            .status(HttpStatus.BAD_REQUEST)
            .json({
                status: HttpStatus.BAD_REQUEST,
                message: exception.message
            });

    }

}